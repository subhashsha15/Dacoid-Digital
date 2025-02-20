import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz, saveAttempt } from '../store/quizSlice';
import { useNavigate } from 'react-router-dom';
import { addAttempt } from '../utils/indexedDB';

function Scoreboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const score = useSelector(state => state.quiz.score);
  const total = useSelector(state => state.quiz.questions.length);

  const handleRestart = () => {
    // Save the attempt in Redux and IndexedDB
    dispatch(saveAttempt());
    const lastAttempt = {
      date: new Date().toLocaleString(),
      score,
      total,
      userAnswers: {} // Optional: include detailed answers if needed
    };
    addAttempt(lastAttempt)
      .then(() => {
        console.log('Attempt saved to IndexedDB');
      })
      .catch((err) => {
        console.error('Error saving attempt to IndexedDB', err);
      });
    dispatch(resetQuiz());
    navigate('/home');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="mb-4">
        Your Score: {score} / {total}
      </p>
      <button onClick={handleRestart} className="[background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)] text-white px-4 py-2 rounded">
        Return to Home
      </button>
    </div>
  );
}

export default Scoreboard;
