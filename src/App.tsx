import { useEffect, useState } from "react";
import "./App.css";
import Singlecard from "./components/Singlecard";

export interface card {
  src: string;
  id: number;
}

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState<card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [firstGuess, setFirstGuess] = useState<card | null>();
  const [secondGuess, setSecondGuess] = useState<card | null>();
  // const [correctGuess, setCorrectGuess] = useState<string[]>([]);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: card) => {
    firstGuess ? setSecondGuess(card) : setFirstGuess(card);
  };

  useEffect(() => {
    if (firstGuess && secondGuess) {
      if (firstGuess.src === secondGuess.src) {
        const updatedCard = cards.map((card) => {
          if (card.src === firstGuess.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });

        setCards(updatedCard);

        resetTurn();
      } else {
        console.log("cards doesnt match");
        resetTurn();
      }
    }
  }, [cards, firstGuess, secondGuess]);

  const resetTurn = () => {
    setFirstGuess(null);
    setSecondGuess(null);
    setTurns((prev) => prev + 1);
  };

  // const handleClick = (card: card) => {
  //   if (firstGuess) {
  //     setSecondGuess(card);

  //     setTimeout(() => {
  //       checkCorrectGuess(card);
  //     }, 100);
  //   } else {
  //     setFirstGuess(card);
  //   }
  // };

  // const checkCorrectGuess = (card: card) => {
  //   if (firstGuess?.src === card?.src) {
  //     setCorrectGuess([...correctGuess, card.src]);
  //   }

  //   setFirstGuess(null);
  //   setSecondGuess(null);
  //   setTurns((prev) => prev + 1);
  // };

  // console.log(firstGuess);
  // console.log(secondGuess);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button
        onClick={() => {
          shuffleCards();
        }}
      >
        New Game
      </button>

      <div className="cd">
        {cards.map((card) => (
          <Singlecard card={card} handleChoice={handleChoice} />
        ))}
      </div>

      <p>
        No of Turns: <span>{turns}</span>
      </p>
    </div>
  );
}

export default App;
