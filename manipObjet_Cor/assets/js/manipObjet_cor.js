const myEmployee = {
  lastname: "Doe",
  firstname: "John",
  birthday: "1981-11-12",
  salary: 2150,
};

const myTable = document.getElementById("tabObj");
const myHead = myTable.createTHead();
const myTitleRow = myHead.insertRow();


for (const key in myEmployee) {
  const myTitleCell = document.createElement("th");
  myTitleRow.appendChild(myTitleCell);
  myTitleCell.textContent = key;
   
}


const myBody = myTable.createTBody();
const myRow = myBody.insertRow();



for (const key in myEmployee) {
  const myCell = myRow.insertCell();
  if (key == "salary") {
    myCell.textContent = myEmployee[key] + " €";
  } 
else if (key == "birthday") {
    const myDate = myEmployee[key].split("-");
    myCell.textContent = myDate[2] + "-" + myDate[1] + "-" + myDate[0];
  }
   else {
    myCell.textContent = myEmployee[key];
  }
}
function majFormu (_monObjet){
const txtNom=document.getElementById('txtNom');
txtNom.value=_monObjet.lastname;
const txtPrenom=document.getElementById('txtPrenom');
txtPrenom.value=_monObjet.firstname;
const txtBirthday=document.getElementById('txtBirthday');
txtBirthday.value=_monObjet.birthday;
const txtSal=document.getElementById('txtSalary');
txSalary.value=_monObjet.salary;
}
majFormu(myEmployee);


const btnValidation=document.querySelector('#btnValidation');
btnValidation.addEventListener('click',function(event){
  event.preventDefault();
  if(txtNom.value!=myEmployee.lastname){
    myEmployee.lastname=txtNom.value;
  }
  if(txtPrenom.value!=myEmployee.firstname){
    myEmployee.firstname=txtPrenom.value;
  }
  if(txtBirthday.value!=myEmployee.birthday){
    try {
      const dateNaiss=new date(birthday.value);
      const dateJour=new date();
      if(dateJour<dateNaiss){
        console.error("date dans le passée");

    } else{
      myEmployee.birthday=txtBirthday.value;   
     }
     } catch (error) {
      console.error(error+" date erronée");
    }
    }else{
    myEmployee.birthday=txtBirthday.value;
  }
  if(txtSal.value>myEmployee.salary){
    myEmployee.salary=txtSal.value;
  }

})