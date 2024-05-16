export const createContainer = () => {
  // can this component be refactored to smaller container files?

  // get root element
  const root = document.getElementById('root');

  // create a 'container' or 'wrapper' where all the elements of the page are going to be rendered
  const container = document.createElement('div');
  container.classList = 'container';

  // create a header for the to-do-list
  const header = document.createElement('h2');
  header.classList = 'header';
  header.innerHTML = 'To-Do List Maker';

  // create input section where new items can be added to the list
  const inputSection = document.createElement('div');
  inputSection.classList = 'input-section';

  // create input field and 'add' button
  const inputField = document.createElement('input');
  inputField.classList = 'input-field';
  inputField.id = 'input-field';

  const inputButton = document.createElement('button');
  inputButton.classList = 'input-btn';
  inputButton.id = 'input-btn';
  inputButton.type = 'button';
  inputButton.innerHTML = 'Add';

  // append to input section
  inputSection.appendChild(inputField);
  inputSection.appendChild(inputButton);

  // create alert section, where messages can be displayed to the user
  const alertSection = document.createElement('div');
  alertSection.classList = 'alert-section';
  alertSection.id = 'alert-section';

  // create a display section including empty list of items for display
  const listDisplaySection = document.createElement('div');
  listDisplaySection.classList = 'display-section';
  listDisplaySection.id = 'display-section';

  const ul = document.createElement('ul');
  ul.classList = 'list-base';
  ul.id = 'list-base';

  // append list to display section
  listDisplaySection.appendChild(ul);

  // append sections to container element
  container.appendChild(header);
  container.appendChild(inputSection);
  container.appendChild(alertSection);
  container.appendChild(listDisplaySection);

  // append container element to root
  root.appendChild(container);
};
