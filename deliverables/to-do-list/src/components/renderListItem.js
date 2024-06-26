import { renderButtonsSection } from './renderButtonsSection.js';
import { renderCheckBox } from './renderCheckBox.js';
import { renderLabel } from './renderLabel.js';

export const renderListItem = (item, index) => {
  // create list item element
  const li = document.createElement('li');
  li.classList = 'list-item';
  li.id = `${index + 1}`;

  // call render checkbox and label elements to be appended into item

  const checkBox = renderCheckBox(item, index);
  const label = renderLabel(item, index);

  // call render buttons section to be appended to list item

  const buttonsSection = renderButtonsSection(index);

  // append child elements to list item
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(buttonsSection);

  return li;
};
