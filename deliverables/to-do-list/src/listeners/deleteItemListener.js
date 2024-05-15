import { deleteItemHandler } from '../handlers/deleteItemHandler.js';

export const deleteItemListener = (element) => {
  element.addEventListener('click', deleteItemHandler);
};
