let data=JSON.parse(localStorage.getItem("TODO_APP_Datas"));
console.log(data)

if(data==null){
    localStorage.setItem("TODO_APP_Datas",JSON.stringify([]));
}
let parentList=document.querySelector(".listParent");
for (let i = 0; i < data.length; i++) {
    let li=document.createElement("li");
    li.innerHTML=` <span >${data[i]}</span>
    <span  class="removeBtn">x</span>`;
    parentList.appendChild(li);
    
}
var itemInput=document.querySelector(".addItem");
var addItemBtn=document.querySelector('.addButton');
var sortItemsBtn=document.querySelector('.sortList');

AddData();
RemoveData();
SortList();
function SortList(){
    sortItemsBtn.addEventListener("click",()=>{
        data.sort((a,b)=>a-b);
        localStorage.setItem("TODO_APP_Datas",JSON.stringify(data));
        parentList.innerHTML="";
        for (let i = 0; i < data.length; i++) {
            let li=document.createElement("li");
            li.innerHTML=` <span >${data[i]}</span>
            <span  class="removeBtn">x</span>`;
            parentList.appendChild(li);
            RemoveData();
        }
    })
}
function AddData(){
    addItemBtn.addEventListener("click",()=>{
    
    
        if (itemInput.value!="") {
            data.push(parseInt(itemInput.value));
            localStorage.setItem("TODO_APP_Datas",JSON.stringify(data));
            let li=document.createElement("li");
            li.innerHTML=` <span>${itemInput.value}</span>
            <span class="removeBtn">x</span>`;
            parentList.appendChild(li);
            RemoveData();
        }
        
        itemInput.value="";
    })
}

function RemoveData() {
    let removeBtns=document.querySelectorAll(".removeBtn");

    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener("click",(e)=>{
            var itemValue=parseInt(e.target.parentElement.firstElementChild.innerHTML);
            for (let j = 0; j < data.length; j++) {
                if (data[j]==itemValue) {
                    for (let k = j; k < data.length-1; k++) {
                        let temp=data[k];
                        data[k]=data[k+1];
                        data[k+1]=temp;
                    }
                    
                    data.pop();
                    localStorage.setItem("TODO_APP_Datas",JSON.stringify(data));
                    e.target.parentElement.remove();
                    break;
                }
                
            }
        })
        
    }
}


