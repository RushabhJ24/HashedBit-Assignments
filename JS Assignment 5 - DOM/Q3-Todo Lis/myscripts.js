// Function to add a task to the list
function addTask(taskName) {
    // Create list item element
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    
    // Create task name element
    const taskElement = document.createElement("span");
    taskElement.textContent = taskName;
    
    // Create complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "Complete";
    
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.textContent = "Delete";
    
    // Append elements to list item
    listItem.appendChild(taskElement);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    // Append list item to the todo list
    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(listItem);
}

// Function to mark a task as completed
function markCompleted(taskElement) {
    taskElement.classList.toggle("strike");
}

// Function to delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}

// Event listener for form submission
function submitfn(event) {
    event.preventDefault();
    
    // Get task name from input field
    const taskInput = document.querySelector(".todo-input");
    const taskName = taskInput.value;
    
    // Add task to the list
    if (taskName) {
        addTask(taskName);
        taskInput.value = ""; // Clear input field
    }
}

// Event listener for marking a task as completed
document.addEventListener("click", function(event) {
    const element = event.target;
    if (element.classList.contains("complete-btn")) {
        const taskElement = element.parentElement;
        markCompleted(taskElement);
    }
});

// Event listener for deleting a task
document.addEventListener("click", function(event) {
    const element = event.target;
    if (element.classList.contains("trash-btn")) {
        const taskElement = element.parentElement;
        deleteTask(taskElement);
    }
});
