import { state } from '../../data/state.js';
import { deleteModalButtonsSection } from './deleteModalButtonsSection.js';

export const renderDeleteItemInterface = (index) => {
  // create container 'box' for the user interface

  const deleteItemInterface = document.createElement('div');
  deleteItemInterface.classList = 'delete-interface';

  // create edit item header
  const deleteHead = document.createElement('h3');
  deleteHead.classList = 'delete-head';
  deleteHead.innerHTML = 'Delete List Item -';

  // create edit item user intro paragraph
  const deleteParagraph = document.createElement('p');
  deleteParagraph.classList = 'delete-par';
  deleteParagraph.innerHTML = `Delete list item: ${state.itemList[index - 1]}`;

  // call component method to create button section.
  const modalButtonsSection = deleteModalButtonsSection(index);

  // append child elements to container

  deleteItemInterface.appendChild(deleteHead);
  deleteItemInterface.appendChild(deleteParagraph);
  deleteItemInterface.appendChild(modalButtonsSection);

  return deleteItemInterface;
};
