import React, { useEffect, useState } from 'react';
import { getAllAttempts } from '../utils/indexedDB';

function HistoryPage() {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    getAllAttempts()
      .then(data => {
        setAttempts(data);
      })
      .catch(err => {
        console.error('Error fetching attempts from IndexedDB', err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Attempt History</h2>
      {attempts.length === 0 ? (
        <p>No attempts found.</p>
      ) : (
        <table className="min-w-full bg-white [background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)]">
          <thead>
            <tr>
              <th className="py-2 px-4 border text-white">Date</th>
              <th className="py-2 px-4 border text-white">Score</th>
              <th className="py-2 px-4 border text-white">Total Questions</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt) => (
              <tr key={attempt.id}>
                <td className="py-2 px-4 border text-white">{attempt.date}</td>
                <td className="py-2 px-4 border text-white">{attempt.score}</td>
                <td className="py-2 px-4 border text-white">{attempt.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HistoryPage;
