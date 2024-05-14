import { editItemHandler } from '../handlers/editItemHandler.js';

export const editItemListener = (element) => {
  // finally! the actual listener for editing a list item
  element.addEventListener('click', editItemHandler);
};
