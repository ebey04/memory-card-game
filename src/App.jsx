import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Score from './Score/Score'

function App() {

const [score, setScore] = useState(0);

function updateScore() {
  setScore(prev => prev + 1);
}

  const [streak, setStreak] = useState(0)

  function updateStreak(score) {
    setStreak(prev => (score > prev ? score : prev));
  }

  return (
    <>
      <div className="top-container">
        <Header />
        <Score
            score = {score, streak} />
      </div>
    </>
  )
}

export default App
