import React, { useState, forceUpdate } from 'react';
import Header from './Header'

function Quiz(props) {
	const [page, setPage] = useState('');

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

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
					  <button className = 'endButton' id='finishBtn' onClick={() => {
						    console.log('value: ' + props.value);
							let numValue = props.value;
							numValue = +numValue;
							console.log('Qvalue: ' + props.quizValue);
							let numQuizValue = props.quizValue;
							numQuizValue = +numQuizValue;
							props.setValuePrice(numValue + numQuizValue);
							console.log('Addition: ' + props.value);
						console.log('.........');
						props.setPageState('dashboard');
					}}>Finish quiz</button>
				</div>
			) : (
				<>
					<div className='question-section'>
                    <div className='quizTitle'>
						Quiz Title
						</div>
						<div className='quizNumber'>
							{/* <span>Question #{currentQuestion + 1}</span>/{questions.length} */}
                            <span>Question #{currentQuestion + 1}</span>:
						</div>
						<div className='quizText'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='quizContainer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quizButton' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;