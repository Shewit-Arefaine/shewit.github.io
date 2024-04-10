
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


self contained // A function that doesn't interact with the DOM directly but performs some logic
function createPatientRowData(patientID, firstName, middleInitials, lastName, dob, department, isOutpatient) {
    const ageDiff = new Date(Date.now() - new Date(dob));
    const isElder = (ageDiff.getUTCFullYear() - 1970) > 65;
    const patientClass = isElder ? "ElderPatient" : "notElder";
    const outpatientClass = isOutpatient ? "OutPatients" : "InPatients";

    return {
        patientID,
        firstName,
        middleInitials,
        lastName,
        dob,
        department,
        isOutpatient: isOutpatient ? "Yes" : "No",
        classes: [patientClass, outpatientClass]
    };
}

// This function depends on the DOM to work, so we pass the DOM elements it needs
function addPatientRowToTable(tableBody, rowData) {
    const newRow = document.createElement("tr");
    newRow.classList.add(...rowData.classes);
    newRow.innerHTML = `<td>${rowData.patientID}</td>
                        <td>${rowData.firstName}</td>
                        <td>${rowData.middleInitials}</td>
                        <td>${rowData.lastName}</td>
                        <td>${rowData.dob}</td>
                        <td>${rowData.department}</td>
                        <td>${rowData.isOutpatient}</td>`;

    tableBody.appendChild(newRow);
}

// DOM-dependent initialization
document.getElementById("btnRegisterPatient").addEventListener("click", function(event) {
    event.preventDefault();

    // Here you would get the values from the DOM
    const patientIDNumber = document.getElementById("patientIdNumber").value;
    // Repeat for other variables...

    // Use the logic function
    const rowData = createPatientRowData(patientIDNumber, /* other parameters */);

    // Use the DOM manipulation function
    addPatientRowToTable(document.getElementById("tbodyPatientsList"), rowData);
});

// Similar refactoring for other event listeners...



