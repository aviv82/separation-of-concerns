import { closeModalHandler } from '../handlers/closeModalHandler.js';

export const closeModalListener = (element) => {
  element.addEventListener('click', closeModalHandler);
};
