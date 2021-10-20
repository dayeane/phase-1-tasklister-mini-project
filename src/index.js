const valuePriority = {
  red: 1,
  yellow: 2,
  green: 3,
}

document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements
  //form and relevant input fields
  const form = document.querySelector("form#create-task-form");
  const orderForm2 = document.querySelector("form#ascending-descending");

  //attach event listeners
  form.addEventListener("submit", createNewTask);
  orderForm2.addEventListener("submit", order);
  
});

const createNewTask = (event) => {
  event.preventDefault();

  const newTaskDescription = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  const newColor = document.querySelector("select#selecttodo");
  
  newTask.setAttribute('data-level', valuePriority[newColor.value]);
  newTask.style.color = newColor.value;

  // valuePriority[newColor.value]
  newTask.addEventListener("click", deleteLi)
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);

  event.target.reset();
};

const appendNewTask = (task) => {
  document.querySelector("#tasks").appendChild(task) ;
};

function ascending() {
  const elementsToOrder = document.querySelectorAll("li");
  console.log(elementsToOrder[0].dataset.level)

  // Array.prototype.slice.call(elementsToOrder); // google

  const orderList = Array.prototype.slice.call(elementsToOrder).sort((firstEl, secondEl) => {
    if (parseInt(firstEl.dataset.level) < parseInt(secondEl.dataset.level)) {
      return firstEl
    } else {
      return secondEl
    }
  });

  console.log(orderList[0].dataset.level)
};

function descending(){
console.log("descending")
};

function order(e) {
 e.preventDefault();

 const dropDown = document.querySelector("select#orderselect");
 if (dropDown.value === "ascending") {
    ascending()
 } else {
    descending()
 }
}

function deleteLi(e) {
  e.target.remove()
}




