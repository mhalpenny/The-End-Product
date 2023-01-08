import React, { useState } from 'react';

function Quiz(props) {
/*====================================================
=                 VARIABLES                       =
====================================================*/
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [response, setResponse] = useState([]);

/*====================================================
=                 ANSWER BUTTONS                     =
====================================================*/
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			//create a new string with the old and new field info
			var tempResponse = response + '/' + score;
			setResponse(tempResponse);
			// console.log(response);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			//set the final string variable for the quiz and display end button
			props.setQuizResponse(response);
			setShowScore(true);
		}
	};

/*====================================================
=                 END BUTTON                       =
====================================================*/
	const handleFinishButton = async () => {
		// console.log('to submit: ' + response);
		//create a JSON appropriate string to be converted
		const newValuesJSON = JSON.stringify(response);

		//convert the values to a new Blob object to be included in the file
		const fileBlob = new Blob([newValuesJSON], {
			type: 'application/json'
		});

		//convert the Blob object to a file for posting
		const fileToUpload = new File([fileBlob], "userdata");

		//generate a string for the server location & file name
		//get the current date from the browser...
		const date = new Date();

		//extract the relevant data to be compiled into a string (YYYY-MM-DD)
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
	
		//xompile date data into hyphenated string
		const dateHypen = [year, month, day].join('-');
		// console.log(withHyphens); 
	
		const generatedNum = Math.floor((Math.random() * 50));
	
		const keyName=`${dateHypen}/${props.user}/quiz-${generatedNum}-${props.quizValue}.json`;
		// console.log('upload');
		// console.log('keyname: ' + keyName);

		//request an upload url from s3 through node/heroku
		const { url } = await fetch(`https://the-end-product.herokuapp.com/api/s3Url?keyName=${keyName}`, {
			crossDomain:true,
			method: 'GET',
			headers: {'Content-Type':'multipart/form-data'},
		})
			.then(response => response.json())
		
		//upload to file with the received s3 url
		await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "multipart/form-data"
			},
			body: fileToUpload,
			});
		
		//based on the current selling value, modify the user's payout
		//to be manipulated the values must be changed from their storage state (strings) to nums
		let numValue = props.value;
		let numQuizValue = props.quizValue;

		//convert to numerical
		numValue = +numValue;
		numQuizValue = +numQuizValue;
		// console.log('value: ' + props.value);
		// console.log('Qvalue: ' + props.quizValue);
		
		//add on the new sold value to the total value
		props.setValuePrice(numValue + numQuizValue);
		// console.log('Addition: ' + props.value);
		
		//return to user to the dashboard
		props.setPageState('dashboard');
	}

/*====================================================
=                 QUESTIONS                          =
=====================================================*/
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

/*====================================================
=                 RENDER                             =
=====================================================*/
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section sellContainer'>
					<span className='centerMessage'>
						<h1 id='sellText'>Thanks!</h1>
					</span>
					<span className='flexSpan'>
						<button className='endButton' id='quizSellButton' onClick={handleFinishButton}>
						Sell data
						</button>
					</span>
				</div>
			) : (
				<>
					<div className='quizContainer'>
                    	<div className='quizTitle'>
						Quiz Title
						</div>
						<div className='quizNumber'>
							 <span>Question #{currentQuestion + 1}</span>:
						</div>
						<div className='quizText'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='questionContainer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<span className='flexSpan'>
								<button className='quizQuestionButton' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							</span>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;