import { card } from "../App";
import "./Singlecard.css";

interface PropsBody {
  card: card;
  handleChoice: (card: card) => void;
  flipped: boolean;
  disable: boolean;
}

export default function Singlecard({
  card,
  handleChoice,
  flipped,
  disable,
}: PropsBody) {
  const handleClick = () => {
    if (!disable) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="" className="front" />
        <img
          src="/img/cover.png"
          alt=""
          className="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
