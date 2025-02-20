import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tickTimer, nextQuestion } from '../store/quizSlice';

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(state => state.quiz.timer);

  useEffect(() => {
    if (timer <= 0) {
      // Auto move to the next question when time is up
      dispatch(nextQuestion());
      return;
    }
    const interval = setInterval(() => {
      dispatch(tickTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, dispatch]);

  return (
    <div className="text-xl font-bold mb-4">
      Time Left: {timer} seconds
    </div>
  );
}

export default Timer;
