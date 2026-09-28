// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add a task when the Add Task button is clicked
addBtn.addEventListener('click', addTask);

// Allow user to press Enter to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Function to add a task
function addTask() {
    // Get the text from the input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a label for the task text
    const label = document.createElement('label');
    label.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Delete the task when delete button is clicked
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });

    // Add checkbox, label, and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';

    // Focus back on the input field so user can add another task
    taskInput.focus();
}
