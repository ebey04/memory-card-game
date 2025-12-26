import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Score from './Score/Score'

function App() {


  return (
    <>
      <div className="top-container">
        <Header />
        <Score />
      </div>
    </>
  )
}

export default App
