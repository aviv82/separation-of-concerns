import { openDeleteModalListener } from '../listeners/openDeleteModalListener.js';
import { openEditModalListener } from '../listeners/openEditModalListener.js';

export const renderButtonsSection = (index) => {
  // this component will create two button elements inside a separate div; 'edit' and 'delete'.
  // it will also add two listeners to the different buttons.
  // if this component becomes too big it could easily be broken into two separate components

  const buttonDiv = document.createElement('div');
  buttonDiv.classList = 'btn-section';

  // create 'edit' button
  const editButton = document.createElement('button');
  editButton.id = `${index + 1}`;
  editButton.classList = 'edit-btn';
  editButton.innerHTML = 'Edit';

  // create 'delete' button
  const deleteButton = document.createElement('button');
  deleteButton.id = `${index + 1}`;
  deleteButton.classList = 'delete-btn';
  deleteButton.innerHTML = 'Delete';

  // add button listeners
  // !!! NOTICE: these listeners handle toggling on the modal, NOT the actual 'edit'/'delete' item logic  !!!
  openEditModalListener(editButton);
  openDeleteModalListener(deleteButton);

  // append buttons to button section and return
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(deleteButton);

  return buttonDiv;
};
