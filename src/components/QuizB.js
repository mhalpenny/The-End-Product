import React, { useState } from 'react';

function Quiz(props) {
/*====================================================
=                 VARIABLES                       =
====================================================*/
	const [response, setResponse] = useState([]);
	const [field, setField] = useState('');
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showEnd, setShowEnd] = useState(false);

/*====================================================
=                 INPUT FIELD                       =
====================================================*/
	const handleTextChange = (event) => {
		setField(event.target.value);
	  }

/*====================================================
=                 NEXT BUTTON                       =
====================================================*/
	function handleNextQuestion(){
		const nextQuestion = currentQuestion + 1;

		//if not the last question, add the response to a string and continue, otherwise add and display the end button
		if (nextQuestion < questions.length) {
			//create a new string with the old and new field info
			var tempResponse = response + '/' + field;
			setResponse(tempResponse);
			// console.log(response);

			//move to next question and erase the field value
			setCurrentQuestion(nextQuestion);
			document.getElementById('quizBField').value = '';		
		} else {
			//create a new string with the old and new field info
			tempResponse = response + '/' + field;
			setResponse(tempResponse);
			// console.log(response);

			//set the final string variable for the quiz and display end button
			props.setQuizBResponse(response);
			setShowEnd(true);
		}
	}

/*====================================================
=                 END BUTTON                       =
====================================================*/
	const handleEndButton = async () => {
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
	
		const keyName=`${dateHypen}/${props.user}/info-${generatedNum}-${props.quizBValue}.json`;
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
		let numQuizValue = props.quizBValue;
	
		//convert to numerical
		numValue = +numValue;
		numQuizValue = +numQuizValue;
		// console.log('value: ' + props.value);
		// console.log('Qvalue: ' + props.quizBValue);
	
		//add the new sold value to the total value
		props.setValuePrice(numValue + numQuizValue);
		// console.log('Addition: ' + props.value);

		//return to user to the dashboard
		props.setPageState('dashboard');	  
	}

/*====================================================
=                 QUESTIONS                         =
====================================================*/
	const questions = [
		{
			questionText: 'What is your name?',
			answerOptions: [],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [],
		},
	];

/*====================================================
=                 RENDER                            =
====================================================*/
	return (
		<div className='quiz'>
			{showEnd ? (
				<div className='sellContainer'>
					<span className='flexSpan'>
						<h1 id='sellText'>Thanks! Confirm your sale:</h1>
					</span>
					<span className='flexSpan'>
						<button className='endButton' id='quizSellButton' onClick={handleEndButton}>
						Sell data
						</button>
					</span>
				</div>
			) : (
				<>
					<div className='quizContainer'>
                    	<div className='quizTitle'>
						Info Form
						</div>
						<div className='quizNumber'>
							 <span>Question #{currentQuestion + 1}</span>:
						</div>
						<div className='quizText'>{questions[currentQuestion].questionText}</div>
					</div>
					<span className='flexSpan'>
						<input type="text" className='quizField' id='quizBField' onChange={handleTextChange} required/>
					</span>	
					<span className='flexSpan'>
						<button className='quizNextButton' onClick={handleNextQuestion}>
							Next
						</button>
					</span>
					<span className='flexSpan'>
						<button className='quizCancelButton' onClick={() => { props.setPageState('dashboard'); }}>
							Cancel
						</button>
					</span>
				</>
			)}
		</div>
	);
}

export default Quiz;