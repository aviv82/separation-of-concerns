import { closeModalListener } from '../listeners/closeModalListener.js';
import { deleteItemListener } from '../listeners/deleteItemListener.js';

export const deleteModalButtonsSection = (index) => {
  const modalButtonsSection = document.createElement('div');
  modalButtonsSection.classList = 'modal-btn-sec';
  const confirmButton = document.createElement('button');
  confirmButton.type = 'button';
  confirmButton.classList = 'delete-btn';
  confirmButton.id = `${index}`;
  confirmButton.innerHTML = 'Delete';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.classList = 'cancel-btn';
  cancelButton.innerHTML = 'Cancel';

  modalButtonsSection.appendChild(confirmButton);
  modalButtonsSection.appendChild(cancelButton);

  // add listeners to modal buttons
  deleteItemListener(confirmButton);
  closeModalListener(cancelButton);

  return modalButtonsSection;
};
