import { state } from '../../data/state.js';
import { renderListItem } from './renderListItem.js';

// creates and renders the current state of the list

export const renderList = () => {
  // get list display section and clear previously rendered list
  const listEl = document.getElementById('list-base');
  listEl.innerHTML = '';

  // render and append list items from the new list
  state.itemList.map((item, index) => {
    // call render list item component renderer
    const li = renderListItem(item, index);
    listEl.appendChild(li);
  });
};
