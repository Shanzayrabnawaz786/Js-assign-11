//  This is my to do app
 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  import { getDatabase,ref, set, push, onValue, remove,update} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


   const firebaseConfig = {
    apiKey: "AIzaSyCX0cCrU4CA3rdTFblt0INGfuMwkk7X_2Q",
    authDomain: "web-apps-8b6b6.firebaseapp.com",
    projectId: "web-apps-8b6b6",
    storageBucket: "web-apps-8b6b6.firebasestorage.app",
    messagingSenderId: "1038604609798",
    appId: "1:1038604609798:web:369951d4cf13a5ed581687",
    measurementId: "G-0C658YKSPX"
  };
 
   const app = initializeApp(firebaseConfig);
//    console.log(app);
    const analytics = getAnalytics();
   const db = getDatabase();
//    console.log(db);
   


    var inpt=document.getElementById("user-text");
    var onUpgradebtn=document.querySelector("button");


    
 window.forAdd =function() {
     if(inpt.value.trim() === ""){
         alert("you can't add list without writting any thing ")
         return
        }else{
            
            // console.log(inpt.value);
            
            var todosRef=ref(db,`todos`);
            var newRef=push(todosRef);
            var key=newRef.key;
       var obj={
        key:key,
         userTodos:inpt.value,
       }
    // console.log(obj);
     set(newRef,obj);
  
        inpt.value="";
    }
}

function fatchingData(){
    var todosRef=ref(db,`todos`);
    onValue(todosRef, (snapshot) => {
  const data = snapshot.val();

 var forUl=document.getElementById("todos-ul");
 forUl.innerHTML=""
 if(data){
    for (let id in data) {
        var element = data[id];
         console.log(forUl);
    forUl.innerHTML +=`
    <li> ${element.userTodos}
     <button onclick="getUpdate('${element.key}')" class="btn-edt"> <i class="fa-solid fa-pencil"></i></button>
        <button onclick="forDel('${element.key}')" class="btn-del" ><i class="fa-solid fa-trash-can" class="bin"></i></button>
    </li> `;
        
    }
 }
   
});
}
fatchingData()

console.log("done");

window.forDel=function (key){
    console.log("deleting keys ",key);
    var specificTodosRef=ref(db,`todos/${key}`)
    remove(specificTodosRef);
    
}

window.forAllDel=function(){
        var todosRef = ref(db, `todos`);
        remove(todosRef)
            .then(() => {
                var forUl = document.getElementById("todos-ul");
                console.log(forUl);
                
                forUl.innerHTML = "";
            })
            .catch((error) => {
                console.error("Error deleting all:", error);
            });
    
}

window.getUpdate=function (key) {
 
    var updatedValue = prompt("Update your item text:"); 
    
    console.log(updatedValue); 

    if (updatedValue && updatedValue.trim() !== "") { 
    var specificTodosRef=ref(db,`todos/${key}`);
    var updatedData={
        userTodos:updatedValue
    }
    update(specificTodosRef,updatedData);
     
    }
}


window.pressEnter = function(enter) {
    if (enter.key === "Enter") {
        forAdd(); 
    }
}
