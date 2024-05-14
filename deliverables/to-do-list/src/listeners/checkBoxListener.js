import { checkBoxHandler } from '../handlers/checkBoxHandler.js';

export const checkBoxListener = (element) => {
  element.addEventListener('change', checkBoxHandler);
};
