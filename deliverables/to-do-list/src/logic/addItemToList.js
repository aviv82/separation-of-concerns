import { state } from '../../data/state.js';
import { ALERTS } from '../../data/constants.js';
import { renderAlert } from '../components/renderAlert.js';
import { renderList } from '../components/renderList.js';

export const addItemToList = (itemToAdd) => {
  // check that input value is not blank
  if (itemToAdd === '') {
    return;
  }

  // check that input value does not already exist in the list
  const doubleValues = state.itemList.filter((item) => item === itemToAdd);

  if (doubleValues.length > 0) {
    // alert user if the item they want to add already exists in the list
    const alertSection = document.getElementById('alert-section');
    const alertBody = renderAlert(ALERTS.ITEM_ALREADY_EXISTS);
    alertSection.appendChild(alertBody);
    alertSection.classList.add('expand');
    return;
  }

  // update state
  state.itemList.push(itemToAdd);

  // re-render item List
  renderList();
};
