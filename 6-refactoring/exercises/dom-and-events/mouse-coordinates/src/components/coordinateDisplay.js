export const coordinateDisplay = (displayInfo) => {
  const div = document.createElement('div');

  div.innerHTML = displayInfo;
  const rootElement = document.getElementById('user-interface');
  rootElement.appendChild(div);
};
