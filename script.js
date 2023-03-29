// let newTask = document.querySelector("#new-task")
// let form = document.querySelector('form')
// let todoUl = document.querySelector('#items')
// let completeUl = document.querySelector('.complete-list ul')

// let createTask = function(task){
//    let listItem = document.createElement('li');
//    let checkBox = document.createElement('input');
//    let label = document.createElement('label');

//    label.innerText = task;
//    checkBox.type = 'checkbox';

//    listItem.appendChild(checkBox);
//    listItem.appendChild(label);

//    return listItem;
// }

// let addTask = function(e){
//     e.preventDefault();
//     const listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem)
//     newTask.value = ' ';
//     bindInCompleteItems(listItem,completeTask);
// }
// let completeTask = function(){
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button')
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkbox = listItem.querySelector("input[type='checkbox']")
//     checkbox.remove()
//     completeUl.appendChild(listItem)
//     bindCompleteItems(listItem,deleteTask)
// }

// let deleteTask = function(){
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode ;
//     ul.removeChild(listItem)
// }
// let bindCompleteItems = function(taskItem,clickDeletebutton){
//     let deleteBtn = taskItem.querySelector(".delete")
//     deleteBtn.onclick = clickDeletebutton;

// }

// let bindInCompleteItems = function(taskItem,checkboxClick){
//      const checkBox = taskItem.querySelector('input[type="checkbox"]')
//      checkBox.onchange = checkboxClick
// }

// form.addEventListener('submit',addTask)

let newTask = document.querySelector("#new-task")
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul')

// TASK SHOW MESSAGE FUNCTION 
let showAlert = function(message,className){
     const div = document.createElement('div')
     div.className = `alert alert-${className}`
     div.innerText = message;
     const container = document.querySelector('.container');
     const header = document.querySelector('.header');
     container.insertBefore(div,header)
     setTimeout(() => {
        document.querySelector('.alert').remove()
     }, 3000);
     
}

let createTask = function (task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    
    listItem.className = "item"; 
    checkBox.type = "checkbox";
    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label)
    return listItem ;

}

let addTask = function (e){
     e.preventDefault();
     let listItem = createTask(newTask.value)
     todoUl.appendChild(listItem)
     newTask.value = ' '
     bindInCompleteItem(listItem,completeTask)
     showAlert('Added','danger')
}
let bindInCompleteItem = function(taskItem,checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick;
    
}

let completeTask = function(){
    let listItem = this.parentNode;
    
    let button = document.createElement('button')
    button.className = 'delete';
    button.innerText = 'Delete';
    listItem.appendChild(button)

    let checkBox = listItem.querySelector('input[type="checkbox"]')
    checkBox.remove()
    completeUl.appendChild(listItem)
    bindCompleteItem(listItem,deleteTask)
}

let deleteTask = function(){
    let listItem = this.parentNode
    // console.log(listItem)
    let ul = listItem.parentNode
    ul.removeChild(listItem)
    showAlert('TASK DELETE','danger')

    // let button = e.target
    // button.parentNode.remove()
    
}

let bindCompleteItem = function(taskItem,deleteTaskItem){
    let itemList = taskItem.querySelector('.delete')
    itemList.onclick = deleteTaskItem
}


// const items = document.querySelector('#items')
// const item = items.querySelectorAll('.item')

for(let i = 0; i < todoUl.children.length; i++){
    bindInCompleteItem(todoUl.children[i],completeTask)
}

for(let i = 0 ; i < completeUl.children.length ; i++ ){
    bindCompleteItem(completeUl.children[i],deleteTask)
}


form.addEventListener('submit',addTask)