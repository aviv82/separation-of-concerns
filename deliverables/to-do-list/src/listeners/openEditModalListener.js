import { openEditModalHandler } from '../handlers/openEditModalHandler.js';

export const openEditModalListener = (element) => {
  element.addEventListener('click', openEditModalHandler);
};
