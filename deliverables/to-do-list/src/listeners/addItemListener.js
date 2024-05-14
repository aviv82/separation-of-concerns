export const addItemListener = (id, handler) => {
  document.getElementById(id).addEventListener('click', handler);
};
