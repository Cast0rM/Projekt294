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
        completedCell.innerText = task.completed ? "❌" : "✔️";

        const actionsCell = document.createElement('td');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("id", "deleteTaskButton");
        deleteButton.setAttribute("width", "10pt");
        deleteButton.innerText = "🗑️";
        deleteButton.addEventListener("click", (id) => {
            fetch('http://127.0.0.1:3000/task/' + task.id, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then(() => {
                alert(`You removed: "${task.title}" from your Tasklist`);
                indexTasks();
            });
        });
        actionsCell.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.setAttribute("id", "editTaskButton");
        editButton.setAttribute("width", "90pt");
        editButton.innerText = "🖊";
        editButton.addEventListener("click", (id) => {
            fetch(`http://127.0.0.1:3000/task/${task.id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((title) => {
                let updateTask = prompt("UPDATE", task.title);
                while(updateTask === '')
                {
                    alert("You have to write something");
                    updateTask = prompt("Retry Update", task.title);
                }
                if(updateTask == null)
                {
                    alert("You changed nothing");
                    return;
                }
                
                
                fetch('http://127.0.0.1:3000/tasks', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        id: task.id,
                        title: updateTask,
                        completed: task.completed
                    })
                })
                    .then((response) => { return response.json(); })
                    .then(() => { 
                        if(task.title != updateTask){
                        alert(`You updated: "${task.title}" \nTo: "${updateTask}"`); 
                        }
                        window.location.reload()
                    })
                    .catch(() => { alert("Something went wrong"); })
            });
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

//Code by Castor M