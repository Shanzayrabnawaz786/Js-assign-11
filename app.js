//  This is my to do app
    var inpt=document.querySelector("input");
    var onUpgradebtn=document.querySelector("button")
     
function forAdd(list) {
    if(inpt.value===""){
        alert("you can't add list without writting any thing ")
    }else{
        var forUl=list.previousElementSibling;
    console.log(forUl);
    forUl.innerHTML +=`<li> ${inpt.value}
     <button onclick="getUpgrade(this)" class="btn-edt"> <i class="fa-solid fa-pencil"></i></button>
        <button onclick="forDel(this)" class="btn-del" ><i class="fa-solid fa-trash-can" class="bin"></i></button>
     
    </li> `;
        inpt.value="";
    }
}


function forDel(elemnt){
    var getli=elemnt.parentElement;
     console.log(getli);
     getli.remove()
}

function onDone(complete){
  var getDone=inpt.nextElementSibling;
  console.log(getDone);
  getDone.innerHTML="";
}
function getUpgrade(upgrade){
    var getSec = document.querySelector(".sec2");
    var getlist = getSec.firstElementChild.nextElementSibling;
    
    if (getlist.children.length > 0) {
        var upgrade = prompt("upgrade your list"); 
        console.log(upgrade);

        if (upgrade !== null && upgrade !== "") { 
           
            upgrade.parentElement.innerHTML = `${upgrade}
            <button onclick="getUpgrade(this)" class="btn-edt"> <i class="fa-solid fa-pencil"></i></button>
        <button onclick="forDel(this)" class="btn-del" ><i class="fa-solid fa-trash-can" class="bin"></i></button>`;
        }
    } else {
        alert("Please first add list then you can upgrade it!");
    }
}

function pressEnter(enter) {
    if (enter.key === "Enter") {
        forAdd(onUpgradebtn); 
    }
}
