import { checkBoxListener } from '../listeners/checkBoxListener.js';

export const renderCheckBox = (item, index) => {
  // create checkBox element see : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox for reference

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `${index + 1}`;
  checkBox.classList = 'checkBox';
  checkBox.value = `item-${index + 1}`;

  // add event listener. in this case we will provide the element itself as an argument and not the id.
  // can you tell why?
  checkBoxListener(checkBox);

  return checkBox;
};
