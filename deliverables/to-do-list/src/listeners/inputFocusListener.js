export const inputFocusListener = (id, handler) => {
  document.getElementById(id).addEventListener('focus', handler);
};
