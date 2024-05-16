export const inputFocusHandler = () => {
  // remove user alerts when input field is selected
  const alertSection = document.getElementById('alert-section');

  if (!alertSection.classList.contains('expand')) return;

  alertSection.innerHTML = '';
  alertSection.classList.remove('expand');
};
