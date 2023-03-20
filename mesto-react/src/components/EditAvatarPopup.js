import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name={'avatar'}
      isOpen={isOpen}
      onClose={onClose}
      title={'Обновить аватар'}
      buttonText={'Сохранить'}
    >
      <div className="popup__input-field">
        <input name="avatar" type="url" className="popup__input popup__input_text_image-link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error input-error-avatar"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;