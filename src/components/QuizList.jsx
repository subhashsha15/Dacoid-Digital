import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuizList() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Sample Quiz</h1>
      <p className="mb-2">Instructions:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>For multiple-choice questions, select the one best answer (A, B, C, or D).</li>
        <li>For integer-type questions, write your numerical answer clearly.</li>
        <li>No calculators unless specified.</li>
        <li>You have 30 minutes to complete this quiz.</li>
      </ol>
      <button onClick={startQuiz} className="[background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)] text-white px-4 py-2 rounded">
        Start Quiz
      </button>
    </div>
  );
}

export default QuizList;
