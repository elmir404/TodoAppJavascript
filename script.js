/*let val;
val =window.document;
val=document.all;
val=document.anchors;
val=document.URL;
console.log(val);*/
//single elements
//let val
//v/al=document.getElementById('header');
//val.style.color='red';
//console.log(document.querySelector('#header'));
/*let val;
val=document.getElementsByClassName('list-group-item');
val =document.getElementsByTagName('li');
val=document.querySelectorAll('li');
val.forEach(function(item,index){
 item.textContent=`${index}-hello`;
});
console.log(val);*/
//let val;
//let list=document.querySelector('.list-group');
//val=list;
//val=list.childNodes[0];
//console.log(val);
//const taskList = document.querySelector('#task-list');
//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children.[0].remove();
//taskList.children[0].removeAttribute('class');
//for(let i=0;i<taskList.children.length;i++){
// taskList.children[i].removeAttribute('class');
//}
/*const cardheader=  document.querySelector('.card-header');
//create eleement
const h2 =document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My-list'));
const parent= document.querySelector('.card');
parent.replaceChild(h2,cardheader);


console.log(cardheader);*/
/*let val;
const link = taskList.children[0].children[0];
val = link.className;
val = link.classList;
link.classList.add('new');
link.classList.remove('new');
console.log(val);*/
//create element
/* const li = document.createElement('li');
 li.className='list-group-item list-group-item-secondary';
 li.setAttribute('title','new-item');
 const text = document.createTextNode('new item');
 li.appendChild(text);
 const a= document.createElement('a');
 a.setAttribute('href','#');
 a.className='delete-item float-right';
 a.innerHTML='<i class="fas fa-times"></i>';
 li.appendChild(a);
 document.querySelector('#task-list').appendChild(li);
 console.log(li);*/
/*const btn= document.querySelector('#btnDeleteAll');
btn.addEventListener('click',function(e){
    let val;
    val=e;
    val=e.target.id;
    console.log(val);
      
  e.preventDefault();
});
//btn.addEventListener('click',btnClick);
//function btnClick(e){
 
//console.log('btn clicked');
 
//  }*/
//  const btn= document.querySelector('#btnDeleteAll');
//  const ul= document.querySelector('#task-list');

// //  btn.addEventListener('click',EventHandler);
// //  ul.addEventListener('dblclick',EventHandler);
// //  btn.addEventListener('mousedown',EventHandler);
// //  btn.addEventListener('mouseup',EventHandler);
// //  ul.addEventListener('mouseenter',EventHandler);
// //  ul.addEventListener('mouseleave',EventHandler);
// //  ul.addEventListener('mouseover',EventHandler);
// //  ul.addEventListener('mouseout',EventHandler);
// const h5= document.querySelector('h5');
//  ul.addEventListener('mousemove',EventHandler);
//  function EventHandler(event){
//     console.log(`event type: ${event.type}`);

//     h5.textContent=`Mouse x:${event.offsetX}
//     Mouse Y:${event.offsetY}`
//  } 
// const input =document.querySelector('#txtTaskName');
// const form= document.querySelector('form');
// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('focus',eventHandler)
// input.addEventListener('blur',eventHandler)
// input.addEventListener('select',eventHandler);
// form.addEventListener('submit',eventHandler);
// function eventHandler(e){
// console.log('event type:'+event.type);
// //console.log('key code'+e.keyCode);
// console.log('value:'+e.target.value);
//  //e.target.style.backgroundColor='red';
//  //e.preventDefault();
//}
//event bubling
// const form= document.querySelector('form');
// const cardbody =document.querySelector('.card-body');
// const card =document.querySelector('.card');
// const container =document.querySelector('.container');
// form.addEventListener('click',function(e){
//    console.log('form clicked');
//    e.stopPropagation();
// });
// cardbody.addEventListener('click',function(e){
//    console.log('card body clicked');
//    e.stopPropagation();

// });
// card.addEventListener('click',function(e){
//    console.log('card clicked');
//    e.stopPropagation();
// });
// container.addEventListener('click',function(e){
//    console.log('container clicked');
//    e.stopPropagation();
// });
// event capturing
/*cardbody.addEventListener('click',function(e){
   console.log('card body clicked');

   
},true);
card.addEventListener('click',function(e){
   console.log('card clicked');
  
},true);
container.addEventListener('click',function(e){
   console.log('container clicked');
   
},true);
    const deleteItems = document.querySelectorAll('.fa-times');
    deleteItems.forEach(function(item){
     item.addEventListener('click',function(e){
        console.log(e.target);
     });
    });*/
//     const Firstname= localStorage.setItem('firstname','Elmir');
//     const lastname=localStorage.setItem('lastname','Qasimzade');
//     console.log(localStorage);
//  let val;
//  //val=localStorage.getItem('firstname');
//  //localStorage.removeItem('firstname');
//  let hobies= ['masinlar','musiqi','kitab'];
//  localStorage.setItem('hobies',JSON.stringify(hobies));
//  console.log(val);
// UI variables
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;
//load items
loadItems();
eventListeners();


function eventListeners() {
   form.addEventListener('submit', addNewItem);
   taskList.addEventListener('click', deleteItem);
   btnDeleteAll.addEventListener('click', deleteAllItems);
}
function loadItems() {
   items = getItemsFromLs();
   items.forEach(function (item) {
      CreateItem(item);
   })
}
//GET items from local stroage
function getItemsFromLs() {
   if (localStorage.getItem('items') == null) {
      items = [];
   } else {
      items = JSON.parse(localStorage.getItem('items'));
   }
   return items;
}

// set item to local stroge
function setItemToLs(text) {
   items = getItemsFromLs();
   items.push(text);
   localStorage.setItem('items', JSON.stringify(items));
}
function deleteItemsFromLS(text){
   items=getItemsFromLs();
   items.forEach(function(item,index){
      if(item === text){
        items.splice(index,1);
      }
   });
   localStorage.setItem('items',JSON.stringify(items));
}
function CreateItem(text) {
   const li = document.createElement('li');
   li.className = 'list-group-item list-group-item-secondary';
   const a = document.createElement('a');
   a.classList = 'delete-item float-right';
   li.appendChild(document.createTextNode(text));
   a.setAttribute('href', '#');
   a.innerHTML = '<i class="fas fa-times"></i>';
   li.appendChild(a);
   taskList.appendChild(li);


}
function addNewItem(e) {
   if (input.value === '') {
      alert('add new item');
   }
   CreateItem(input.value);
   e.preventDefault();
   //SAVE TO LS
   setItemToLs(input.value);
}

function deleteItem(e) {

   if (e.target.className === 'fas fa-times') {
      if(confirm('are you sure?')){
      e.target.parentElement.parentElement.remove();
      
      deleteItemsFromLS(e.target.parentElement.parentElement.textContent);
      }
   }
}
function deleteAllItems(e) {
   //taskList.innerHTML='';
   if (confirm('are you sure?')) {
     while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
     }
      localStorage.clear();
   }

   e.preventDefault();
}
