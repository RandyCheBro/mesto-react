import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name={'add-card'}
      isOpen={isOpen}
      onClose={onClose}
      title={'Новое место'}
      buttonText={'Создать'}
    >
      <div className="popup__input-field">
        <input name="image-name" type="text" className="popup__input popup__input_text_image-name" placeholder="Название"
          required minLength="2" maxLength="30" />
        <span className="popup__input-error input-error-image-name"></span>
      </div>
      <div className="popup__input-field">
        <input name="image-link" type="url" className="popup__input popup__input_text_image-link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-error-image-link"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;