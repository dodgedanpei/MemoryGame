import React, {useState} from "react";
import './style.css'
function App() {

  const numbers = ['001','002','003','004','005','006','007','008','009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '020'];

  const [gameImages, setGameImages] = useState(numbers.sort(() => 0.5 - Math.random()).slice(0, 12))
  let resetGameImages = () => setGameImages(numbers.sort(() => 0.5 - Math.random()).slice(0, 12))

  const [score, setScore] = useState(0)

  let addScore = () => setScore(prevScore => prevScore + 1) 
  let minusScore = () => setScore(0)

  const [memory, setMemory] = useState([])
  let resetMemory = () => setMemory([])

  const [highScore, setHighScore] = useState(0)

  let newHighScore = () => score > highScore ? setHighScore(score) : ""

  let addMe = (e) => setMemory(prevMemory =>
    {
      if(prevMemory.includes(e.target.src)){
        newHighScore()
        minusScore()
        resetMemory()
        resetGameImages()
      } else {
        addScore()
        resetGameImages()
      }
      return (
        [...prevMemory, e.target.src]
      )
    })

  return (
    <>
      <div className="score-container">
      <h3>Current Score: {score}</h3>
      <h3>High Score: {highScore}</h3>
      </div>
      <div className="game-container">
    {
      gameImages.map(
        item => {
          return (<div className="game-image-container">
            <img
             src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item}.png`}
             onClick={addMe}
             className="game-image">
             </img>
             </div>)
        }
      )
    }
    </div>
    </>
  );
}

export default App;
