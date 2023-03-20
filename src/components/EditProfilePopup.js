import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name={'edit-profile'}
      isOpen={isOpen}
      onClose={onClose}
      title={'Редактировать профиль'}
      buttonText={'Сохранить'}
    >
      <div className="popup__input-field">
        <input name="name" type="text" className="popup__input popup__input_text_name" placeholder="Имя" required minLength="2" maxLength="40" />
        <span className="popup__input-error input-error-name"></span>
      </div>
      <div className="popup__input-field">
        <input name="about" type="text" className="popup__input popup__input_text_job" placeholder="Профессия"
          required minLength="2" maxLength="200" />
        <span className="popup__input-error input-error-about"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;