
document.getElementById("btnRegisterPatient").addEventListener("click",function(event){
    event.preventDefault();
let patientIDNumber = document.getElementById("patientIdNumber");
let firstName = document.getElementById("firstName");
let middleIntials = document.getElementById("middleInitials");
let lastName = document.getElementById("lastName");
let dateOfBirth = document.getElementById("dateOfBirth");
let ddlDepartment= document.getElementById("ddlDepartment");
let radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");
let radioIsOutPatientNo = document.getElementById("radioIsOutPatientNo");

console.log(patientIDNumber.value);
console.log(firstName.value);
console.log(middleIntials.value);
console.log(lastName.value);
console.log(dateOfBirth.value);
console.log(ddlDepartment.value);


let newRow = document.createElement("tr");
let agediff = new Date(Date.now()- new Date(dateOfBirth.value));
newRow.classList.add( (agediff.getUTCFullYear() - 1970) > 65 ? "ElderPatient" : "notElder");
newRow.classList.add(radioIsOutPatientYes.checked ? "OutPatients" : "InPatients");


newRow.innerHTML = `<td>${patientIDNumber.value}</td>
                    <td>${firstName.value}</td>
                    <td>${middleIntials.value}</td>
                    <td>${lastName.value}</td>
                    <td>${dateOfBirth.value}</td>
                    <td>${ddlDepartment.value}</td>
                    <td>${radioIsOutPatientYes.checked ? "Yes" : "No"}</td>`;


document.getElementById("tbodyPatientsList").appendChild(newRow);



});

document.getElementById("chkElderlyPatients").addEventListener("click",function(){
    let elderlyPatientChecked = document.getElementById("chkElderlyPatients").checked ;
    let notElder = document.getElementsByClassName("notElder");
    
//    notElder.forEach(row => {
    // if(elderlyPatientChecked){
        // row.classList.add("elder-done");
    // }else{
        // row.classList.remove("elder-done");
    // }
//    });
    console.log("Elderly check is clicked!!!");
    for (const row of notElder){
        if(elderlyPatientChecked){
            row.classList.add("d-none");
        }else{
            row.classList.remove("d-none");
        }
    }


});


document.getElementById("chkShowOutPatients").addEventListener("click",function(){
    let checkedOutPatients = document.getElementById("chkShowOutPatients").checked ;
    let InPatients = document.getElementsByClassName("InPatients");
    for (const row of InPatients){
        if(checkedOutPatients){
            row.classList.add("outpatientyes");
        }else{
            row.classList.remove("outpatientyes");
        }
    }


});



