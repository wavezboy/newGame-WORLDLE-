import { useState } from 'react'
import './App.css'

interface card {
  card: object
}


const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/helmet-1.png"},
  {"src": "/img/helmet-1.png"},
  {"src": "/img/helmet-1.png"},
  {"src": "/img/helmet-1.png"},
  {"src": "/img/helmet-1.png"},
]

function App() {
  const [cards, setCards] = useState<object>([])
  const [turns, setTurns] = useState<number>()

  // shuffle cards
  const shuffleCards = () => {

    const shuffledCards = [...cardImages, ...cardImages]
     .sort(()=> Math.random() - 0.5)
     .map((card)=>({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  
  }


  console.log(cards, turns)

  return (
    
   <div className='App'>
    <h1>
      Magic Match
    </h1>
    <button onClick={shuffleCards}>
      New Game
    </button>

  {cardImages.map((card, i)=>(
    <div key={i}>
      <img src={card.src} alt="" />
    </div>
  ))}
    
   </div>
  )
}

export default App
