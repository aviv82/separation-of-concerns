export const checkBoxHandler = (event) => {
  // this handler needs to affect the element appended below it(label element)
  // in order to get that element we can use this element's id because it is the same value

  const id = event.target.id;
  const labelEl = document.getElementById(`label-${id}`);

  // check if checkbox is checked
  if (event.target.checked) {
    // if the item is checked we want to scratch the item from the list by striking it through
    //we can do that by adding a special class to the label
    labelEl.classList.add('checked');
  } else {
    // if the item is unchecked we want to un-strike it by removing the 'checked' class
    labelEl.classList.remove('checked');
  }

  // hint: look in the css file; style.css to see what adding the second class does!
};
