import { state } from '../../data/state.js';
import { renderList } from '../components/renderList.js';

export const addItemToList = (itemToAdd) => {
  // check that input value is not blank
  if (itemToAdd === '') {
    return;
  }

  // check that input value does not already exist in the list
  const doubleValues = state.itemList.filter((item) => item === itemToAdd);

  if (doubleValues.length > 0) {
    throw new Error('This item already exists in the list');
  }

  // update state
  state.itemList.push(itemToAdd);

  // re-render item List
  renderList();
};
