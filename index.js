let taskinput = document.getElementById("task-input");

let plusbutton = document.getElementById("plus-button");

let tabs = document.querySelectorAll(".task-tab div");
let mode = "all";
let tasklist = [];
let filterlist = [];
plusbutton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskinput.value,
    iscomplete: false,
  };
  tasklist.push(task);
  console.log(tasklist);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = tasklist;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterlist;
  }
  let resulthtml = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].iscomplete == true) {
      resulthtml += `<div class="task">
      <div class="task-done">${list[i].taskContent}</div>
      <div>
        <button onclick="togglecomplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
        <button onclick="deletetask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>`;
    } else {
      resulthtml += `<div class="task">
    <div>${list[i].taskContent}</div>
    <div>
      <button onclick="togglecomplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
      <button onclick="deletetask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resulthtml;
}

function togglecomplete(id) {
  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      tasklist[i].iscomplete = !tasklist[i].iscomplete;
      break;
    }
  }
  render();
  console.log(tasklist);
}

function deletetask(id) {
  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      tasklist.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event) {
  mode = event.target.id;
  filterlist = [];

  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].iscomplete == false) {
        filterlist.push(tasklist[i]);
      }
    }

    render();
  } else if (mode == "done") {
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].iscomplete == true) {
        filterlist.push(tasklist[i]);
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return Math.random().toString(36).substr(2, 16);
}
