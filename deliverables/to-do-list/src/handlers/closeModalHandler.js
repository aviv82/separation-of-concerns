export const closeModalHandler = () => {
  // this handler toggles the modal to 'hide' and 'cancels' back to the main list interface
  const modal = document.getElementById('modal');

  // clear any user interface rendered to the modal
  modal.innerHTML = '';

  // hides the modal
  modal.classList.replace('show', 'hide');
};
