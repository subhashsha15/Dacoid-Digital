import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { nextQuestion } from '../store/quizSlice';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
    const questions = useSelector(state => state.quiz.questions);
    const userAnswers = useSelector(state => state.quiz.userAnswers);

    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.id];

    const handleNext = () => {
        if (currentQuestionIndex === questions.length - 1) {
            navigate('/scoreboard');
        }
        else {
            dispatch(nextQuestion());
        }

    };

    return (
        <div className="container mx-auto p-4">
            <Timer />
            <Question question={currentQuestion} />
            <div className="mt-4">
                <button
                    onClick={handleNext}
                    disabled={!userAnswer}
                    className={`px-4 py-2 rounded ${!userAnswer ? 'bg-gray-400' : '[background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)] text-white'}`}
                >
                    Next Question
                </button>
            </div>
        </div>
    );
}

export default QuizPage;
