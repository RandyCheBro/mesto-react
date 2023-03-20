import React, { useState } from 'react';
import api from '../utils.js/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);

  const [cards, setCards] = useState([])


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img onClick={props.onEditAvatar} className="profile__avatar-image" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="открыть-редактирование"></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="открыть-добавление"></button>
      </section>

      <section className="elements">
        <ul className="elements__table">
          {cards.map(card => (
            <Card
              {...card}
              onCardClick={props.onCardClick}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;