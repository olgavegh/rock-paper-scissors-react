import React, { useState } from "react";
import styles from "./Game.module.css";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            className={styles.button}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      <div>
        {playerChoice && codeyChoice && (
          <div className={styles.results}>
            <div>
              <p>
                <span>{playerChoice.emoji}</span>
                You chose {playerChoice.name}
              </p>
            </div>
            <div>
              <p>
                <span>{codeyChoice.emoji}</span>The computer chose{" "}
                {codeyChoice.name}
              </p>
            </div>
            <h2>{result}</h2>
            <button className={styles.button} onClick={resetGame}>
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
