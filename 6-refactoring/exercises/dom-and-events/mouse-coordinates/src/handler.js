import { state } from '../data/state.js';
import { coordinateDisplay } from './components/coordinateDisplay.js';
import { formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
  // debugger;
  // read & process user input
  console.log(event);
  state.xCor = event.pageX;
  state.yCor = event.pageY;

  // execute core logic
  const formattedCoordinates = formatCoordinates(state.xCor, state.yCor);

  // render result for user
  document.getElementById('mouse-position').innerHTML = formattedCoordinates;
  // coordinateDisplay(formattedCoordinates);

  // log action for developers
  // console.log('\n--- new coordinates ---');
  // console.log('x:', xValue);
  // console.log('y:', yValue);
};
