import { editButtonListener } from '../listeners/editButtonListener.js';

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

  // add button listeners
  // !!! NOTICE: these listeners handle toggling on the modal, NOT the actual 'edit'/'delete' item logic  !!!
  editButtonListener(editButton);

  // append buttons to button section and return
  buttonDiv.appendChild(editButton);

  return buttonDiv;
};
