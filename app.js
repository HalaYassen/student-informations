'use strict';

//global variable
let myForm=document.getElementById('form1');
let table=document.getElementById('table-Info');
let totals=document.getElementById('total');
let tableArr=['Id','Name','Email','Mobile','Age','Tuition'];
let myListStydentArr=[];

//create constructor 
function ListStudent(email,mobilePhone,tuition)
{
    this.email=email;
    this.mobilePhone=mobilePhone;
    this.tuition=tuition;
    this.age=generateRandom();
    myListStydentArr.push(this);

}


//functions 
ListStudent.prototype.renderStudentToTable=function()
{
    let newRow=document.createElement('tr');
    let newId=document.createElement('td');
    newId.textContent='';
    let nameSt=document.createElement('td');
   // nameSt.textContent=str.replace(/@.*$/,"");
    let newEmail=document.createElement('td');
    newEmail.textContent=this.email;
    let newMobile=document.createElement('td');
    newMobile.textContent=this.mobilePhone;
    let newAge=document.createElement('td');
    newAge.textContent=this.age;
    let newTuition=document.createElement('td');
    newTuition.textContent=this.tuition;
    newRow.appendChild(newId);
    newRow.appendChild(nameSt);
    newRow.appendChild(newEmail);
    newRow.appendChild(newMobile);
    newRow.appendChild(newAge);
    newRow.appendChild(newTuition);
    table.appendChild(newRow);
    let totalofTuition=calculateTotal();
    total.textContent=`the total is =${totalofTuition}`;
}


//function eventListener
function formEventListner(event) {
    event.preventDefault();
    console.log(event);
    let em=event.target.email.value;
    let mob=event.target.mobile.value;
    let tui=event.target.tuition.value;
    let newStudent=new ListStudent(em,mob,tui);
    newStudent.renderStudentToTable();
    localStorage.setItem('myLocalLIst',JSON.stringify(myListStydentArr));
}

//function to generate the random number between 18-24
function generateRandom() 
{
   return Math.floor(Math.random() * (24 - 18)+ 18);
}

//function make header for table
function makeHeader() {
    let headerRow=document.createElement('tr');
    let tableHeader;
    for (let i = 0; i < tableArr.length; i++) {
       // console.log(tableArr);
       tableHeader=document.createElement('th');
       tableHeader.textContent=tableArr[i];
       headerRow.appendChild(tableHeader);
    }
    table.appendChild(headerRow);
}
// render student after refresh
function renderStudent(){
    for (let i = 0; i < myListStydentArr.length; i++) 
    {
        //console.log(myListStydentArr[i]);
        
    }
}

//calc total
function calculateTotal() 
{
    let total=0;
    for (let i = 0; i < myListStydentArr.length; i++) {
        total+=myListStydentArr[i].tuition;
    } 
    return total;  
}

//call the function
myForm.addEventListener('submit',formEventListner);
makeHeader();