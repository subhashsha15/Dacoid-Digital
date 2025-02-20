import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../store/quizSlice';

function Question({ question }) {
  const dispatch = useDispatch();
  const userAnswer = useSelector(state => state.quiz.userAnswers[question.id] || '');
  const [inputAnswer, setInputAnswer] = useState(userAnswer);

  const handleMCQClick = (option) => {
    if (!userAnswer) {
      dispatch(answerQuestion({ questionId: question.id, answer: option.label }));
    }
  };

  const handleInputChange = (e) => {
    setInputAnswer(e.target.value);
  };

  const handleInputBlur = () => {
    if (!userAnswer && inputAnswer !== '') {
      dispatch(answerQuestion({ questionId: question.id, answer: inputAnswer }));
    }
  };

  // feedback based on the answer
  let feedback = '';
  if (userAnswer) {
    if (userAnswer.trim().toUpperCase() === question.correctAnswer.trim().toUpperCase()) {
      feedback = 'Correct!';
    } else {
      feedback = `Incorrect. Correct answer: ${question.correctAnswer}`;
    }
  }

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">
        {question.id}. {question.question}
      </h2>
      {question.type === 'mcq' ? (
        <div className="space-y-2">
          {question.options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleMCQClick(option)}
              disabled={!!userAnswer}
              className="border p-2 rounded w-full text-left hover:bg-gray-200"
            >
              {option.label}. {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <input
            type="number"
            value={inputAnswer}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={!!userAnswer}
            className="border p-2 rounded w-full"
            placeholder="Your answer"
          />
        </div>
      )}
      {userAnswer && (
        <div className="mt-2">
          <span className={feedback === 'Correct!' ? 'text-green-600' : 'text-red-600'}>
            {feedback}
          </span>
        </div>
      )}
    </div>
  );
}

export default Question;
