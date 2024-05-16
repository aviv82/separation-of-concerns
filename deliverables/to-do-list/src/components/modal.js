export const modal = () => {
  // create modal element and append directly to the htm body.
  // see css file to understand how the modal isolates the page's main content from the user.
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal';
  modalDiv.classList = 'modal hide';

  document.body.appendChild(modalDiv);
};
