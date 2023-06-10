let myContainer = document.getElementById("modal-container-id")
function openModal(){

    myContainer.style.display ="flex";
}
function closeModal(){

    myContainer.style.display ="none";
}

const myBtn = document.getElementById("add-task-btn");

myBtn.innerText="Add Task";

myBtn.addEventListener('click',(event) =>{
   // to prevent your page from reload
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('due-date').value;
    const status = document.getElementById('status').value;

    addTask(taskName, priority, dueDate, status );
    myContainer.style.display ="none";
})


function addTask(taskName, priority, dueDate, status){

  myBtn.innerText="Add Task";
  if(status == 'not-started'){

    //add in the column of not started
    let column = document.getElementById('NotStarted');
 
    column.innerHTML += `
                     <li>
                     <p>${taskName}</p>
                     <p>${priority}</p>
                     <p>${dueDate}</p>
                     <p>${status}</p>
                     <h3><button id="edit-1" onclick="edit1(this)">
                     <span class="material-symbols-outlined">
                     edit_note
                     </span></button></h3>
                     <h4><button class="n-Btn" onclick="remove1(this)">
                     <span class="material-symbols-outlined">
                     delete
                     </span></button></h4>
                     </li>
                     `;  
                     /*if(row.length <= 0){
                      ele1.style.display="none";
                     }else{
                      alert("Added Successfull");
                     }
                     ele1.style.display="none"*/
              if(column.children[0].innerText =="Nothing is here..Please Add a Task !"){
                  column.children[0].remove();
              };
  


   let opt1 = document.getElementById("NotStarted");
   opt1.style.display = "block";

 
  //let empty = document.getElementById("emptyMsg");
  //empty.style.display="none";
    

   let arrow = document.querySelector(".icondown");
   arrow.style.display ="block";
  }
  
   else if(status =='in-progress'){
    //add in the column of not started
    let column = document.getElementById('InProgress');
    column.innerHTML += `
                     <li>
                     <p>${taskName}</p>
                     <p>${priority}</p>
                     <p>${dueDate}</p>
                     <p>${status}</p>
                     <h3><button onclick="edit2(this)">
                     <span class="material-symbols-outlined">
                     edit_note
                     </span></button></h3>
                     <h4><button class="i-Btn" onclick="remove2(this)">
                     <span class="material-symbols-outlined">
                     delete
                     </span></button></h4>
                     </li>
                     `;

                    
       if(column.children[0].innerText =="Nothing is here..Please Add a Task !"){
         column.children[0].remove();
       };
      

      let opt2 = document.getElementById("InProgress");
      opt2.style.display = "block"; 
      
    let dragdItem = column.children[0];
    let dragBox = document.getElementById("NotStarted");
    let dragBox2 =  document.getElementById("Completed");

    dragdItem.addEventListener('dragstart',(e)=>{
          console.log("Dragstar has been triggered");
          e.target.className += ' hold';
          setTimeout(()=>{
            e.target.className =' hide';
          },0);
    });

    dragdItem.addEventListener('dragend', ()=>{
      console.log("dragend has been triggered");

    });

    dragBox.addEventListener('dragover',()=>{

    });
    dragBox.addEventListener('dragenter',()=>{

    });
    dragBox.addEventListener('dragleave',()=>{

    });
    dragBox.addEventListener('drop',()=>{

    });

  //let empty = document.getElementById("emptyMsg1");
 // empty.style.display="none";
    let arrow = document.querySelector(".icondown2");
    arrow.style.display ="block";
  }
  else if(status =='completed'){
    // add it in the complete
    let column = document.getElementById('Completed');
    column.innerHTML += `
                     <li>
                     <p>${taskName}</p>
                     <p>${priority}</p>
                     <p>${dueDate}</p>
                     <p>${status}</p>
                     <h3><button onclick="edit3(this)">
                     <span claSS="material-symbols-outlined">
                     edit_note
                     </span></button></h3>
                     <h4><button id="c-Btn"onclick="remove3(this)">
                     <span class="material-symbols-outlined">
                     delete
                     </span></button></h4>
                     </li>
                     `;

    if(column.children[0].innerText =="Nothing is here..Please Add a Task !"){
    column.children[0].remove();
    };

    let opt3 = document.getElementById("Completed");
     opt3.style.display = "block";



 // let empty = document.getElementById("emptyMsg2");
 // empty.style.display="none";
     
    let arrow = document.querySelector(".icondown3");
   arrow.style.display ="block";
  }
  //after successfully added ,input should be empty
  /*document.getElementById('task-name').value ="";
  document.getElementById('priority').value ="";
  document.getElementById('due-date').value ="";
  document.getElementById('status').value ="";*/
  document.getElementById("add-task-form").reset();

}

// below code is for searching

function srchFun() {
  let filter = document.getElementById("srch").value.toUpperCase();
  let list = document.querySelectorAll("li");
  for(let i =0; i< list.length; i++){
    let l1 = list[i].getElementsByTagName('p')[0];
    let l2 = list[i].getElementsByTagName('P')[1];
    let l3 = list[i].getElementsByTagName('P')[2];
    let l4 = list[i].getElementsByTagName('P')[3];
    if(l1 || l2 || l3 || l4){
      let textValue = l1.textContent || l1.innerHTML;
      let textValue1 = l2.textContent || l2.innerHTML;
      let textValue2 = l3.textContent || l3.innerHTML;
      let textValue3 = l4.textContent || l4.innerHTML;

      if(textValue.toUpperCase().indexOf(filter) > -1 ||textValue1.toUpperCase().indexOf(filter) > -1 ||
      textValue2.toUpperCase().indexOf(filter) > -1 || textValue3.toUpperCase().indexOf(filter) > -1){
        list[i].style.display="";
      }
      else{
        list[i].style.display="none";
      }
    }

    
  }

};


//below code is for removing list
const remove1 = () => {
  let c =document.getElementById("NotStarted");
  let current = c.getElementsByTagName("li")[0];
 
  current.remove();
 
  if(c.children.length <= 0){
    let ele1 = document.createElement("h1");
    ele1.innerText = "Nothing is here..Please Add a Task !";
    c.appendChild(ele1);
  }
}

const remove2 = () =>{
  let d = document.getElementById("InProgress")
  let current = d.getElementsByTagName("li")[0];
  //console.log(current);
  current.remove();

  if(d.children.length <= 0){
    let ele2 = document.createElement("h1");
    ele2.innerText = "Nothing is here..Please Add a Task !";
    d.appendChild(ele2);
  
  }
 
}

const remove3 = () =>{
  let e = document.getElementById("Completed");
  let current = e.getElementsByTagName("li")[0];
 // console.log(current);
 current.remove();
 
 if(e.children.length <= 0){
   let ele3 = document.createElement("h1");
   ele3.innerText = "Nothing is here..Please Add a Task !";
   e.appendChild(ele3);
 }

}

//below code is for updating list 

const edit1 =(e) =>{

      let task = document.getElementById('task-name');
      task.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
     
      let prior = document.getElementById('priority');
      prior.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
      
      let due = document.getElementById('due-date');
      due.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
      
      let stat = document.getElementById('status');
      stat.value = e.parentElement.previousElementSibling.innerHTML; 

    
        myBtn.innerText="Update Task";
     
      
      openModal();
      remove1();
   }

   const edit2 =(e) =>{
       
      let task = document.getElementById('task-name');
      task.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
     
      let prior = document.getElementById('priority');
      prior.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
      
      let due = document.getElementById('due-date');
      due.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;

      let stat = document.getElementById('status');
      stat.value = e.parentElement.previousElementSibling.innerHTML;

      myBtn.innerText="Update Task";
      
      openModal();
      remove2();
   }

    
 const edit3 =(e) =>{
       
  let task = document.getElementById('task-name');
  task.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
 
  let prior = document.getElementById('priority');
  prior.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  
  let due = document.getElementById('due-date');
  due.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;

  let stat = document.getElementById('status');
  stat.value = e.parentElement.previousElementSibling.innerHTML;

  myBtn.innerText="Update Task";
  
  openModal();
  remove3();
 }
     
//drag function

let  ulist1 = document.getElementById("NotStarted");
console.log(ulist1.children);


