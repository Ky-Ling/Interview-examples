import React from 'react';
import { useEffect, useState } from 'react';
import Line from "./Line";

const API_URL = "https://www.algoexpert.io/api/fe/wordle-words";

function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);



  useEffect(() => {
    const handleType = (event) => {
      if(isGameOver) return;

      if(event.key === "Enter") {
        if (currentGuess.length !== 5) return;
        
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;

        if(isCorrect) setIsGameOver(isCorrect);

        if(currentGuess.length >= 5) return;

      
      }
      
      if(event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      }
      const isLetter = event.key.match(/^[a-z]{1}$/) !== null;
      
      if(isLetter) {
        setCurrentGuess(oldGuess => oldGuess + event.key)
      }
    };
    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution, guesses]);


  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      console.log(words);
      const randomWord = words[Math.floor(Math.random() * words.length)];
      // setSolution(randomWord);
    };
    
    fetchWords();
  }, [])


  return (
    <div className='board'>
      {
        guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex(val => val == null);

          return (
            <Line 
              guess={isCurrentGuess ? isCurrentGuess : guess ?? ""}
              isFinal={!currentGuess && guess !== null}
              solution={solution}
              />
          )
        }) 
      }
    </div>
  );
}

export default App;
