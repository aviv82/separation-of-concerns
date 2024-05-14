import { closeModalListener } from '../listeners/closeModalListener.js';
import { editItemListener } from '../listeners/editItemListener.js';

export const renderEditModalButtonsSection = (index) => {
  const modalButtonsSection = document.createElement('div');
  modalButtonsSection.classList = 'modal-btn-sec';
  const confirmButton = document.createElement('button');
  confirmButton.type = 'button';
  confirmButton.classList = 'confirm-btn';
  confirmButton.id = `${index}`;
  confirmButton.innerHTML = 'Confirm';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.classList = 'cancel-btn';
  cancelButton.innerHTML = 'Cancel';

  modalButtonsSection.appendChild(confirmButton);
  modalButtonsSection.appendChild(cancelButton);

  // add listeners to modal buttons
  editItemListener(confirmButton);
  closeModalListener(cancelButton);

  return modalButtonsSection;
};
