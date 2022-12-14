document.addEventListener("DOMContentLoaded", () => {
    createTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        new FormData(createTaskForm);

        createTask();
    });
});
function createTask() {
    const createTaskForm = document.getElementById("createTaskForm");
    const taskInput = document.getElementById("taskInput");
    let task = {
        title: taskInput.value
    };

    let response = fetch('http://127.0.0.1:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    }).then((response) => {
        return response.json();
    }).then(() => {
        alert(`You've createt a new Task: "${taskInput.value}"`)
        window.location.href = "./index.html";
    }).catch(() => {
        alert("Something went wrong")
    });
}



//Code by Castor M