import { state } from '../../data/state.js';
import { renderList } from '../components/renderList.js';

export const editListItem = (userEditInput, index) => {
  // check that user input is different from previous list item value
  if (state.itemList[index - 1] === userEditInput) return;

  // check that input value does not already exist in the list
  const doubleValues = state.itemList.filter((item) => item === userEditInput);

  if (doubleValues.length > 0) {
    throw new Error('This item already exists in the list');
  }

  // update state
  state.itemList[index - 1] = userEditInput;

  // re-render item List
  renderList();
};
