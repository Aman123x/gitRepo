
document.title="List Item Page";
// console.log(document.getElementById("header-title"));

// Get Elements by ID

// let headerTitle=document.getElementById("header-title");

// headerTitle.textContent="Hello";
// headerTitle.innerText="Goodbye";
// headerTitle.innerHTML="<h3>Hello</h3>"

//console.log(headerTitle);
// let header=document.getElementById("main-header");

// headerTitle.style.borderBottom="solid red";

// header.style.borderBottom="solid 3px black";

// Get Elements By Class Name

// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";

// for(let i=0;i<items.length;i++){
//     if(i===1){
//         continue;
//     }
//     else if(i===2){
//         items[i].style.backgroundColor="green";
//     }
//     else{
//         items[i].style.backgroundColor="grey";
//     }
//     items[i].style.fontWeight="bold";
// }

// Get Elements By TagName

// var li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent="hello 2";
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="yellow";

// for(let i=0;i<li.length;i++){
//     if(i===1){
//         continue;
//     }
//     else if(i===2){
//         li[i].style.backgroundColor="green";
//     }
//     else{
//         li[i].style.backgroundColor="grey";
//     }
//     li[i].style.fontWeight="bold";
// }

// querySelector --> It always select first item

// let list=document.querySelector(".list-group-item");

// // list.style.backgroundColor="red";

// let secondList=document.querySelector(".list-group-item:nth-child(2)");

// // secondList.style.backgroundColor="green";

// let thirdList=document.querySelector(".list-group-item:nth-child(3)");

// // thirdList.style.display="none";

// //querySelectorAll --> Select all the items

// let listSecond=document.querySelectorAll(".list-group-item");

// listSecond[1].style.color="green";

// listSecond.forEach((listSecond,index)=>{
//     if(index%2===0){
//         listSecond.style.backgroundColor="green";
//     }
// });

// let odd= document.querySelectorAll("li:nth-child(odd)");
// let even= document.querySelectorAll("li:nth-child(even)");

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="red";
//     even[i].style.backgroundColor="yellow";
// }

// Traversing th DOM

let itemList=document.querySelector("#items");
// ParentNode

//console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode);

//ParentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// ChildNodes --> Do not use, it also includes blank space use children instead

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// firstChild --> It also return empty spaces, instead use firstElementChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello 1";

// lastChild --> It also return empty spaces, instead use lastElementChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello 4";

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";


// createElement

// Create a div
let newDiv= document.createElement("div");

// Add class
newDiv.className="hello";

// Add id
newDiv.id="hello1"

// Add attribute
newDiv.setAttribute('title','Hello Div');

// Create text node
let newDivText = document.createTextNode('HEllo World');

// Add text to div
newDiv.appendChild(newDivText);

let container=document.querySelector("header .container");
let h1=document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontSize="30px";

// container.insertBefore(newDiv, h1);

let item=document.querySelector(".list-group");
item.insertAdjacentElement('beforebegin',newDiv);
