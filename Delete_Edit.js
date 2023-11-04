let form =document.getElementById('addForm');
let itemList =document.getElementById('items');
let filter=document.getElementById("filter");

form.addEventListener("submit",addItem);

itemList.addEventListener('click',removeItem);

itemList.addEventListener("click",editItem);

filter.addEventListener("keyup",filterItems); 

function addItem(e){
    e.preventDefault();

    let newItem=document.getElementById("item").value;
    let newItem1=document.getElementById("item1").value;
    let a=newItem+" "+newItem1;

    let li=document.createElement('li');
    li.className="list-group-item";

    li.appendChild(document.createTextNode(a));

    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    let edit=document.createElement("button");
    edit.className="btn btn-primary mx-1 btn-sm float-right";

    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);

    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li=e.target.parentElement;
            // console.log(li);
            itemList.removeChild(li);
        }
    }
}

// function editItem(e){
//     if(e.target.classList.contains("edit")){

//     }
// }

function filterItems(e){
    let text=e.target.value.toLowerCase();

    let items=itemList.getElementsByTagName("li");

    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}