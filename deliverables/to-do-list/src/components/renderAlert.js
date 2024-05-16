export const renderAlert = (alertBody) => {
  const alert = document.createElement('p');
  alert.id = 'alert';
  alert.classList = 'alert';
  alert.innerHTML = alertBody;
  return alert;
};
