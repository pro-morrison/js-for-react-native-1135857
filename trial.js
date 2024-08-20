// Get references to the input, button, and list elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the value from the input field and remove extra spaces
    if (taskText !== '') { // Check if the input is not empty
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text of the list item

        // Append the new item to the list
        todoList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Add an event listener to the button
addButton.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
