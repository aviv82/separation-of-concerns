import { state } from '../../data/state.js';
import { modalInputFocusHandler } from '../handlers/modalInputFocusHandler.js';
import { renderEditModalButtonsSection } from './renderEditModalButtonsSection.js';

export const renderEditItemInterface = (index) => {
  // create container 'box' for the user interface

  const editItemInterface = document.createElement('div');
  editItemInterface.classList = 'edit-interface';

  // create edit item header
  const editHead = document.createElement('h3');
  editHead.classList = 'edit-head';
  editHead.innerHTML = 'Edit List Item -';

  // create edit item user intro paragraph
  const editParagraph = document.createElement('p');
  editParagraph.classList = 'edit-par';
  editParagraph.innerHTML = `Input new value for list item: ${
    state.itemList[index - 1]
  }`;

  // create input field
  const editInput = document.createElement('input');
  editInput.classList = 'edit-input';
  editInput.id = 'edit-input';
  editInput.type = 'text';

  editInput.addEventListener('focus', modalInputFocusHandler);

  // create alert section, where messages can be displayed to the user
  const alertSection = document.createElement('div');
  alertSection.classList = 'modal-alert-section';
  alertSection.id = 'modal-alert-section';

  // !!! NOTICE: did you notice how many of these components and elements could be reused instead of recreated? !!!

  // call component method to create button section.
  const modalButtonsSection = renderEditModalButtonsSection(index);

  // append child elements to container

  editItemInterface.appendChild(editHead);
  editItemInterface.appendChild(editParagraph);
  editItemInterface.appendChild(editInput);
  editItemInterface.appendChild(alertSection);
  editItemInterface.appendChild(modalButtonsSection);

  return editItemInterface;
};
