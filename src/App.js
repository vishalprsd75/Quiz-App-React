import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of these computer languages do we use in artificial intelligence?',
			answerOptions: [
				{ answerText: 'PROLOG', isCorrect: true },
				{ answerText: 'FORTRAN', isCorrect: false },
				{ answerText: 'COBOL', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'What is the number used to control the forms of other numbers known as?',
			answerOptions: [
				{ answerText: 'Map', isCorrect: false },
				{ answerText: 'Mask', isCorrect: true },
				{ answerText: 'Marker', isCorrect: false },
				{ answerText: 'Mantissa', isCorrect: false },
			],
		},
		{
			questionText: 'A list of various coded instructions is known as:',
			answerOptions: [
				{ answerText: 'Algorithm', isCorrect: false },
				{ answerText: 'Utility programs', isCorrect: false },
				{ answerText: 'Flowchart', isCorrect: false },
				{ answerText: ' Computer program', isCorrect: true },
			],
		},
		{
			questionText: 'Which protocol provides an email facility among the hosts?',
			answerOptions: [
				{ answerText: 'POP', isCorrect: false },
				{ answerText: 'SMTP', isCorrect: true },
				{ answerText: 'MIME', isCorrect: false },
				{ answerText: 'IMAP', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the father of Computers?',
			answerOptions: [
				{ answerText: 'Bjarne Stroustrup', isCorrect: false },
				{ answerText: 'James Gosling', isCorrect: false },
				{ answerText: 'Charles Babbage', isCorrect: true },
				{ answerText: 'Dennis Ritchie', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following language does the computer understand?',
			answerOptions: [
				{ answerText: 'C Language', isCorrect: false },
				{ answerText: 'Assembly Language', isCorrect: false },
				{ answerText: 'BASIC', isCorrect: false },
				{ answerText: 'Binary Language', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is the smallest unit of data in a computer?',
			answerOptions: [
				{ answerText: 'Bit', isCorrect: true },
				{ answerText: 'KB', isCorrect: false },
				{ answerText: 'Byte', isCorrect: false },
				{ answerText: 'Nibble', isCorrect: false },
			],
		},
		{
			questionText: ' Which of the following computer language is written in binary codes only?',
			answerOptions: [
				{ answerText: 'pascal', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'machine language', isCorrect: true },
				{ answerText: 'C#', isCorrect: false },
			],
		},
		{
			questionText: ' Which of the following service allows a user to log in to another computer somewhere on the Internet?',
			answerOptions: [
				{ answerText: 'UseNet', isCorrect: false },
				{ answerText: 'Telnet', isCorrect: true },
				{ answerText: 'e-mail', isCorrect: false },
				{ answerText: 'FTP', isCorrect: false },
			],
		},
		{
			questionText: 'Source program is compiled to an intermediate form called?',
			answerOptions: [
				{ answerText: 'Smart code', isCorrect: false },
				{ answerText: 'Machine code', isCorrect: false },
				{ answerText: 'Byte Code', isCorrect: true },
				{ answerText: 'Executable code', isCorrect: false },
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
  const resetQuiz=()=>{
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);

  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <>
          <button type="submit" onClick={resetQuiz}>Play Again!</button>
          </>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
