import { editListItem } from '../logic/editListItem.js';
import { closeModalHandler } from './closeModalHandler.js';

export const editItemHandler = (event) => {
  // finally! the actual handler for editing a list item
  // the key here is using the shared item id to 'edit' the correct item from the list

  const index = event.target.id;

  // first step is fetching the value from the edit item input field
  const input = document.getElementById('edit-input');

  // check that input value is not blank
  if (input.value === '') {
    return;
  }

  // handle edit logic
  editListItem(input.value, index);

  // close modal
  closeModalHandler();
};
