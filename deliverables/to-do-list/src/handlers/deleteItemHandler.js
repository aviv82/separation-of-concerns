import { state } from '../../data/state.js';
import { renderList } from '../components/renderList.js';
import { closeModalHandler } from './closeModalHandler.js';

export const deleteItemHandler = (event) => {
  // handle deleting a list item
  // the key again is using the shared item id to remove the correct item from the list

  const index = event.target.id;

  // use id to infer correct index of list item to remove
  state.itemList.splice(index - 1, 1);

  // re-render list
  renderList();

  // close modal
  closeModalHandler();
};
