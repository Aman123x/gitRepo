
document.title="List Item Page";
// console.log(document.getElementById("header-title"));

// Get Elements by ID

let headerTitle=document.getElementById("header-title");

// headerTitle.textContent="Hello";
// headerTitle.innerText="Goodbye";
// headerTitle.innerHTML="<h3>Hello</h3>"

console.log(headerTitle);
let header=document.getElementById("main-header");

// headerTitle.style.borderBottom="solid red";

header.style.borderBottom="solid 3px black";

// Get Elements By Class Name

var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent="hello 2";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor="yellow";

for(let i=0;i<items.length;i++){
    if(i===1){
        continue;
    }
    else{
        items[i].style.backgroundColor="grey";
    }
}

