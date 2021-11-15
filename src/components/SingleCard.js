import React from "react";

import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={flipped ? "flipped" : ""}>
        <img className="back" src={card.src} alt="card back"></img>
        <img className="front" src="/img/cover.png" alt="card front"></img>
      </div>
    </div>
  );
}
