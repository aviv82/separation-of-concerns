import { renderDeleteItemInterface } from '../components/renderDeleteItemInterface.js';
import { inputFocusHandler } from './inputFocusHandler.js';

export const openDeleteModalHandler = (event) => {
  // this handler is responsible to toggling on the modal.
  // not actually handling the edit item logic.
  // there will be a separate handler to take care of that.

  inputFocusHandler();

  // get modal element and toggle 'hide' class to 'show'.
  // see css file for details
  const modal = document.getElementById('modal');

  // call component to render 'edit item' user interface to append to the modal
  const deleteItemInterface = renderDeleteItemInterface(event.target.id);

  modal.appendChild(deleteItemInterface);
  modal.classList.replace('hide', 'show');
};
