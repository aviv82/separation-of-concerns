/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
  const table = document.createElement('table');
  arrayOfArrays.map((row) => {
    const tableRow = document.createElement('tr');
    row.map((data) => {
      const tableData = document.createElement('td');
      tableData.innerHTML = data;
      tableRow.appendChild(tableData);
    });
    table.appendChild(tableRow);
  });
  return table;
};

// describe('an H1 with text: "good bye"', () => {
//   const actual = header(1, 'good bye');
//   it('has tagName "H1"', () => {
//     expect(actual.tagName).toEqual('H1');
//   });
//   it('has innerHTML: "good bye"', () => {
//     expect(actual.innerHTML).toEqual('good bye');
//   });
//   it('has childElementCount: 0', () => {
//     expect(actual.childElementCount).toEqual(0);
//   });
// });
