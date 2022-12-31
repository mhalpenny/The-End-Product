import React, { useState } from 'react';

function Quiz(props) {
	var response = [];
	const [field, setField] = useState('');
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleTextChange = (event) => {
		setField(event.target.value);
	  }

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

	//modified from a score based quiz, TODO: remove score
	//modified from a score based quiz, TODO: remove score
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section welcomeContainer'>
					<h1 className="welcome" id='quizText'>That's it!</h1>
					{/* this button absolutely needs to be cleaned up */}
					{/* and converted to a state based process */}
					<button className = 'endButton' id='finishBtn' 
						onClick={() => {
							// console.log('value: ' + props.value);
							let numValue = props.value;
							numValue = +numValue;
							// console.log('Qvalue: ' + props.quizValue);
							let numQuizValue = props.quizValue;
							numQuizValue = +numQuizValue;
							props.setValuePrice(numValue + numQuizValue);
							// console.log('Addition: ' + props.value);
							// console.log('.........');
							props.setPageState('dashboard');
						}}>
					Finish quiz
					</button>
				</div>
			) : (
				<>
					<div className='question-section'>
                    <div className='quizTitle'>
						Info Form
						</div>
						<div className='quizNumber'>
							 <span>Question #{currentQuestion + 1}</span>:
						</div>
						<div className='quizText'>{questions[currentQuestion].questionText}</div>
					</div>
					<input type="text" className='quizField' id='quizBField' onChange={handleTextChange} required/>
					{/* modify css */}
					<button className='quizBButton' id='' 
						onClick={() => { 
							const nextQuestion = currentQuestion + 1;
							if (nextQuestion < questions.length) {
								response[currentQuestion] = field;
								setCurrentQuestion(nextQuestion);
								document.getElementById('quizBField').value = '';
							} else {
								setShowScore(true);
								props.setQuizBResponse(response);
							}
						}}>
						Next
					</button>
					<button className='quizCancelButton' id='' 
					onClick={() => { props.setPageState('dashboard'); }}>
						Cancel
					</button>
				</>
			)}
		</div>
	);
}

export default Quiz;