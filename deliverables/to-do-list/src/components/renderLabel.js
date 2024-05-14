export const renderLabel = (item, index) => {
  const label = document.createElement('label');

  // the 'setAttribute' method adds attributes to elements
  label.setAttribute('for', `item-${index + 1}`);
  label.classList = 'label';
  label.id = `label-${index + 1}`;
  label.innerHTML = item;
  return label;
};
