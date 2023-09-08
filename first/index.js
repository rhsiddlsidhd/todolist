let taskinput = document.getElementById("task-input");
let addbutton = document.getElementById("button-add");
let tasklist = [];
let tabs = document.querySelectorAll(".tast_tap div");
addbutton.addEventListener("click", addtask);
let mode = "all";
let Filterlist = [];

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    Filter(event);
  });
}
function addtask() {
  let taskcontent = taskinput.value;
  let task = {
    id: randomIDGenerate(),
    taskcontent: taskinput.value,
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
    list = Filterlist;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].iscomplete == true) {
      resultHTML += `<div class="task">
    <div class="task-done">${list[i].taskcontent}</div>
    <div>
      <button onclick="tooglecomplete('${list[i].id}')">check</button>
      <button onclick="deletetask('${list[i].id}')">delete</button>
    </div>
  </div>`;
    } else {
      resultHTML += `<div class="task">
    <div>${list[i].taskcontent}</div>
    <div>
      <button onclick="tooglecomplete('${list[i].id}')">check</button>
      <button onclick="deletetask('${list[i].id}')">delete</button>
    </div>
  </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function tooglecomplete(id) {
  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      tasklist[i].iscomplete = !tasklist[i].iscomplete;
      // 반대값을 입력함으로써 왔다갔다가 가능
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

function Filter(event) {
  mode = event.target.id;

  console.log("filter클릭댐", event.target.id);
  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].iscomplete == false) {
        Filterlist.push(tasklist[i]);
      }
    }
    tasklist = Filterlist;
    render();
  } else if (mode == "done") {
    for (let i = 0; i < tasklist.length; i++) {
      if (tasklist[i].iscomplete == true) {
        Filterlist.push(tasklist[i]);
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
