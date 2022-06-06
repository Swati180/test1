document.querySelector("form").addEventListener("submit",Masairecord);
let form=document.querySelector("form");
function Masairecord(event){
    event.preventDefault();
let names=form.name.value;
let Employees=form.employeeID.value;
let departments=form.department.value;
let Experiences=form.exp.value;
let emails=form.email.value;
let mobiles=form.mbl.value;
console.log(names,Employees,departments,Experiences,emails,mobiles)

    var tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=names;
    let td2=document.createElement("td")
    td2.innerText=Employees;
    let td3=document.createElement("td")
    td3.innerText=departments;
    let td4=document.createElement("td")
    td4.innerText=Experiences;
    let td5=document.createElement("td")
    td5.innerText=emails;
    let td6=document.createElement("td")
    td6.innerText=mobiles;

    let td7=document.createElement("td")
    if (Experiences > 5)
    {td7.innerText="Senior";}

     else if(Experiences<=2||Experiences<=5)
    {td7.innerText="Junior";}

    else if(Experiences<=1)
    {td7.innerText="Fresher";}

    let td8=document.createElement("td")
    td8.innerText="DELETE";
    td8.style.backgroundColor="red";
    td8.style.cursor="pointer";
    td8.addEventListener("click",deleteRow)


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}

function deleteRow(event){
    event.target.parentNode.remove()
}