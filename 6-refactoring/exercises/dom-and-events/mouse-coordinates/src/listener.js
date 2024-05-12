import { USER_INTERFACE } from '../data/constants.js';
import { showMouseCoordinates } from './handler.js';

export const addListener = () => {
  document
    .getElementById(USER_INTERFACE)
    .addEventListener('mousemove', showMouseCoordinates);
};
