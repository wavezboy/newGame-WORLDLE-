import { useState } from 'react'
import './App.css'

interface card {
  src : string
}


const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState<card[]>([])
  const [turns, setTurns] = useState<number>()
  const [cover, setCover] = useState("cover")
  const [original, setOriginal] = useState("original")
  // shuffle cards
  const shuffleCards = () => {

    const shuffledCards = [...cardImages, ...cardImages]
     .sort(()=> Math.random() - 0.5)
     .map((card)=>({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  
  }


  const makeClick = () => {
    setCover("original")
    setOriginal("cover")
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

  <div className='cd'>
    
   {cards.map((card, i)=>(
    <div className='container' onClick={makeClick}  key={i}>
      <img className={cover} src="/img/cover.png" alt="" />
      <img className={original} src={card.src} alt="" />
    </div>
  ))}
     </div>
   </div>
  )
}

export default App
