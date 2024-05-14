import { addItemToList } from '../logic/addItemToList.js';

export const addItemHandler = () => {
  // get value of input field
  const itemValue = document.getElementById('input-field');

  addItemToList(itemValue.value);
  itemValue.value = '';
};
