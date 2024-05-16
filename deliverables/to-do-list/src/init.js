import { createContainer } from './components/container.js';
import { modal } from './components/modal.js';
import { addItemHandler } from './handlers/addItemHandler.js';
import { inputFocusHandler } from './handlers/inputFocusHandler.js';
import { addItemListener } from './listeners/addItemListener.js';
import { inputFocusListener } from './listeners/inputFocusListener.js';

// step 1: create a basic 'root' div element and append to the body (can this be refactored to a component file?)

const root = document.createElement('div');
root.id = 'root';
root.classList = 'root';
document.body.appendChild(root);

// step 2: call component method to create 'container/wrapper' element with input field and list display sections

createContainer();

// step 3: call component to create 'modal' element. a modal is an element presented 'on top' of other elements in the DOM
// it is similar in some ways to a prompt/alert etc.
// in this application the modal will be used as interface for the user to confirm/cancel choices

modal();

// step 4: call listeners (we can provide the arguments for the listener parameters from the init call)

addItemListener('input-btn', addItemHandler);
inputFocusListener('input-field', inputFocusHandler);
