export const modalInputFocusHandler = () => {
  // remove user alerts when input field is selected
  const alertSection = document.getElementById('modal-alert-section');

  if (!alertSection.classList.contains('expand')) return;

  alertSection.innerHTML = '';
  alertSection.classList.remove('expand');
};
