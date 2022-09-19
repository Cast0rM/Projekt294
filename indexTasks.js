function renderTasks(tasks) {
    const tbody = document.querySelector("#tasks tbody");
    tbody.replaceChildren([]);
    tasks.forEach((task) => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.innerText = task.id;
        const titleCell = document.createElement('td');
        titleCell.innerText = task.title;
        const completedCell = document.createElement('td');
        completedCell.innerText = task.completed ? "✔️" : "❌";
        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete Task";
        deleteButton.addEventListener("click", (id) => {
            fetch('http://127.0.0.1:3000/task/'+ task.id, {
                method: "DELETE",
                headers: {
                    'Content-Type' : 'application/json;charset=utf-8'
                },
            }).then(() => {
                indexTasks();
            }); 
        });

        actionsCell.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.innerText = "Edit Button";
        editButton.addEventListener("click", (id)=>{
            fetch('http://127.0.0.1:3000/task/' + id, {
                method: "PUT",
                headers: {
                    'Content-Type' : 'application/json;charset=utf-8'
                },
            }).then(()=> {
                
            })
        })
        actionsCell.appendChild(editButton);

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);
        row.appendChild(actionsCell)
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
    }).then((data) => {
        renderTasks(data)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
});



function redCreateTask() {
    window.location.href = "./indexCreateTask.html";
};