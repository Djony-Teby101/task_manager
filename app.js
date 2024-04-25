function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";
  
    if (task === "") {
      return;
    }
  
    var taskItem = document.createElement("li");
    var taskSpan = document.createElement("span");
    var taskDelete = document.createElement("button");
  
    taskItem.appendChild(taskSpan);
    taskSpan.textContent = task;
    taskItem.appendChild(taskDelete);
  
    taskDelete.textContent = "Effacer";
    // taskDelete.onclick = function() {
    //   taskItem.remove();
    // };
    taskDelete.addEventListener('click',()=>{
      taskItem.remove();
    })
  
    document.getElementById("taskList").appendChild(taskItem);
  }