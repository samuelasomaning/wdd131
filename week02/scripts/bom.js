// declaring variables
const input = document.querySelector('#favchp');
const button = document.querySelector('button');
const list = document.querySelector('');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the input value

li.textContent = input.value;

// populate the button textContent with a ❌
deleteButton.textContent = '❌';

// Append the li element variable with the delete button
li.append(deleteButton);

// Append the li element variable to the unordered list in your HTML
list.append(li);

// Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
    list.removeChild(li);
});


