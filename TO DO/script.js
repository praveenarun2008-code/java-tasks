  let tasks = [];
function addTask() {
  const taskName = document.getElementById("taskInput").value.trim();
  const deadlineValue = document.getElementById("deadlineInput").value;

  new Promise((resolve, reject) => {
    if (taskName === "") {
      reject("Task name cannot be empty!");
    } else if (deadlineValue === "") {
      reject("Please select a deadline!");
    } else {
      const task = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        completed: false,
        createdAt: new Date().toLocaleString(),
        deadline: new Date(deadlineValue),
        finishedAt: null,
        alerted: false 
      };
      tasks.push(task);
      resolve("Task added successfully!");
    }
  })
    .then(msg => {
      alert(msg);
      document.getElementById("taskInput").value = "";
      document.getElementById("deadlineInput").value = "";
      viewTasks();
    })
    .catch(err => alert(err));
}
function viewTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  if (tasks.length === 0) {
    taskList.innerHTML = "<li>No tasks found!</li>";
    return;
  }
  for (let task of tasks) {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    const now = new Date();
    let statusText = "";
    if (!task.completed) {
      const diff = task.deadline - now;
      if (diff <= 0) {
        statusText = " Deadline passed!";
        li.style.backgroundColor = "#ffcccc";
        if (!task.alerted) {
          alert(`Time is over for: "${task.name}"!`);
          task.alerted = true;
        }
      } 
      else {
        const hrs = Math.floor(diff / 1000 / 60 / 60);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        statusText = ` ${hrs}h ${mins}m left`;
      }
    } 
    else {
      statusText = ` Finished at: ${task.finishedAt}`;
      li.style.backgroundColor = "#ccffcc";
    }
    taskText.textContent = `${task.name} 
      (Created: ${task.createdAt}) 
       Deadline: ${task.deadline.toLocaleString()} 
       ${statusText}`;
    const btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔️ Done";
    doneBtn.onclick = () => markCompleted(task.id);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Delete";
    deleteBtn.onclick = () => deleteTask(task.id);
    btnContainer.appendChild(doneBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
  }
}
function deleteTask(id) {
  try {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error("Task not found!");
    tasks.splice(index, 1);
    viewTasks();
  } catch (error) {
    alert(error.message);
  }
}

function markCompleted(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = true;
    task.finishedAt = new Date().toLocaleString();
    viewTasks();
  }
}
