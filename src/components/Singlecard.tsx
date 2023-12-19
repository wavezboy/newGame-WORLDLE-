import { card } from "../App";
import "./Singlecard.css";

interface PropsBody {
  card: card;
  handleChoice: (card: card) => void;
}

export default function Singlecard({ card, handleChoice }: PropsBody) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div
      className="container"
      key={card.id}
      onClick={() => {
        handleClick;
      }}
    >
      <img src="/img/cover.png" alt="" className="cover" />
      <img src={card.src} alt="" />
    </div>
  );
}
