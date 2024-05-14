import { openEditItemModalHandler } from '../handlers/openEditItemModalHandler.js';

export const editButtonListener = (element) => {
  element.addEventListener('click', openEditItemModalHandler);
};
