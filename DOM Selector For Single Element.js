//One good thing JQuery is good for is just quick simple plug-ins or scripts that you need to do for a specific actions but neve sugested for DOM Manipulation anymore
//Single Elemnts

// document.getElementById()
console.log(document.getElementById('task-title'));

//Get Things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Change Styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//aftr reloading if you want to see nothing
//document.getElementById('task-title').style.display = 'none';

//Change Content
document.getElementById('task-title').textContent = 'Task List' ;
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style = "color:red"> Task List</span>';

// the other way to do is just give getElementById a new variable for Example::-->>
const taskTitle = document.getElementById('task-title');

//and the process begins
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//aftr reloading if you want to see nothing
//taskTitle.style.display = 'none';

//Change Content
taskTitle.textContent = 'Task List' ;
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style = "color:red"> Task List</span>';

//document.querySelector()
//it's much more powerfull because we dont have to select things by ID, we can select them by anything basically it works like JQuery you can put any CSS in here
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color ='red'; // it will just change the first one and not all of the 'li' command list
document.querySelector('ul li').style.color ='red';
