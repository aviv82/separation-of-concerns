import { ALERTS } from '../../data/constants.js';
import { state } from '../../data/state.js';
import { renderAlert } from '../components/renderAlert.js';
import { renderList } from '../components/renderList.js';

export const editListItem = (userEditInput, index) => {
  // check that user input is different from previous list item value
  if (state.itemList[index - 1] === userEditInput) return;

  // check that input value does not already exist in the list
  const doubleValues = state.itemList.filter((item) => item === userEditInput);

  const alertSection = document.getElementById('modal-alert-section');

  if (doubleValues.length > 0) {
    // alert user if the item they want to add already exists in the list
    const alertBody = renderAlert(ALERTS.ITEM_ALREADY_EXISTS);
    alertSection.appendChild(alertBody);
    alertSection.classList.add('expand');
    return;
  }

  // update state
  state.itemList[index - 1] = userEditInput;

  // re-render item List
  alertSection.classList.remove('expand');
  renderList();
};
