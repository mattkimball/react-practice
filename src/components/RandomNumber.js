import { useState } from "react"


export default function RandomNumber() {
    const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
    const [guess, setGuess] = useState(1);
    const [guesses, setGuesses] = useState([]);
    const [secretNumber, setSecretNumber] = useState(getRandomNumber());
    const [winState, setWinState] = useState(false);

    const newGame = () => {
        setWinState(false);
        setGuess(1);
        setGuesses([]);
        setSecretNumber(getRandomNumber());
    };

    const handleChange = ({target}) => {
        setGuess(parseInt(target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (winState) return;
        if (guess === secretNumber) {
            setWinState(true);
            return;
        }
        if (guesses.includes(guess)) return;
        setGuesses((prev) => [guess, ...prev].sort((a, b) => a - b));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="numberGuess">Guess a Number Between 1 and 10: </label>
                <br />
                <input type="number" value={guess} onChange={handleChange} />
                <button type="submit">Make Guess</button>
            </form>
            <p>{guesses.length > 0 && `Guesses: ${guesses.join(', ')}`}</p>
            <p>{winState && `That's correct! The number was ${secretNumber}`}</p>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}