function renderTasks(tasks){
    const tbody = document.querySelector("#tasks tbody");
    tasks.forEach((task) => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.innerText = task.id;
        const titleCell = document.createElement('td');
        titleCell.innerText = task.title;
        const completedCell = document.createElement('td');
        completedCell.innerText = task.completed ? "✔️" : "❌";

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);
        tbody.appendChild(row);
        
    });
}

function indexTasks() {
    fetch('http://127.0.0.1:3000/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },

    }).then((response) => {
        return response.json();
    }).then((data) =>{
        renderTasks(data);
    }).catch(() => {
        alert("Something went wrong")
    });
}

document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
});

function redCreateTask(){
    window.location.href="./indexCreateTask.html";
};