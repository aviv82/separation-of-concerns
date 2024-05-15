import { openDeleteModalHandler } from '../handlers/openDeleteModalHandler.js';

export const openDeleteModalListener = (element) => {
  element.addEventListener('click', openDeleteModalHandler);
};
