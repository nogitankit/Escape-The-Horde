import React from 'react'
import './App.css'
import Frame from './assets/Frame'
import Keyboard from './assets/Keyboard'
import { languages } from './assets/languages'

function App() {
  //state values
  const [currentWord, setCurrentWord] = React.useState("typescript")
  const [guessedWord, setGuessedWord] = React.useState([])

  const wrongGuessArray = guessedWord.filter(letter => !currentWord.includes(letter))
  const wrongGuesses = wrongGuessArray.length
  console.log(wrongGuesses)
  
  const isGameOver = wrongGuesses === languages.length - 1 ? true : false 
  console.log(isGameOver)

  const letters = currentWord.split("").map((char, index) => {
    return (
      <span className="letter" key={index}>
        {guessedWord.includes(char) ? char : ''}
      </span>
    )
  })

  function keyPressed(key){
    setGuessedWord(prev => {
      return(
      prev.includes(key) ? prev : [...prev, key] 
      )
    })
  }
  console.log(guessedWord)


  return (
    <main style={{display : 'flex', justifyContent : 'center', flexDirection : 'column', alignItems : 'center'}}>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from assembly</p>
      </header>
      <section className='game-status'>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className='languages'>
        <Frame  wrong={wrongGuesses}/>
      </section>
      <section className='letters'>
        {letters}
      </section>
     <Keyboard keyPressed={keyPressed} guessed={guessedWord} current ={currentWord}/>
     <button className='new-game'>New Game</button>
     
      
    </main>
  )
} 

export default App
