import React from "react";

function Card(card) {

  function handleClick() {
    card.onCardClick(card);
  }

  return (
    <li className="element">
      <button className="element__trash element__trash_hidden" type="button"></button>
      <img className="element__image"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}
        </h2>
        <div className="element__like-group">
          <button className="element__like" type="button"></button>
          <p className="element__quantity-like">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;