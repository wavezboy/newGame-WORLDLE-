import { useState } from "react";
import "./App.css";

interface card {
  src: string;
  id: number;
}

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState<card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [firstGuess, setFirstGuess] = useState<card | null>();
  const [secondGuess, setSecondGuess] = useState<card | null>();
  const [correctGuess, setCorrectGuess] = useState<string[]>([]);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleClick = (card: card) => {
    if (firstGuess) {
      setSecondGuess(card);

      setTimeout(() => {
        checkCorrectGuess(card);
      }, 100);
    } else {
      setFirstGuess(card);
    }
  };

  const checkCorrectGuess = (card: card) => {
    if (firstGuess?.src === card?.src) {
      setCorrectGuess([...correctGuess, card.src]);
    }

    setFirstGuess(null);
    setSecondGuess(null);
    setTurns((prev) => prev + 1);
  };

  // console.log(firstGuess);
  // console.log(secondGuess);
  console.log(correctGuess);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button
        onClick={() => {
          setCorrectGuess([]);
          shuffleCards();
        }}
      >
        New Game
      </button>

      <div className="cd">
        {cards.map((card, i) => (
          <div
            className="container"
            key={i}
            onClick={() => {
              handleClick(card);
            }}
          >
            <img src="/img/cover.png" alt="" className="cover" />
            <img
              src={card.src}
              alt=""
              className={
                firstGuess?.id === card.id ||
                secondGuess?.id === card.id ||
                correctGuess.includes(card.src)
                  ? "cover"
                  : ""
              }
            />
          </div>
        ))}
      </div>

      <p>
        No of Turns: <span>{turns}</span>
      </p>
    </div>
  );
}

export default App;
