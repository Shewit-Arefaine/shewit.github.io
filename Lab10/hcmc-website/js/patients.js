function addPatient(patientID, fName, mInitials, lName, dob, department, isOutPatient) {
    let newRow = document.createElement("tr");
    let agediff = new Date(Date.now() - new Date(dob));
    newRow.classList.add((agediff.getUTCFullYear() - 1970) > 65 ? "ElderPatient" : "notElder");
    newRow.classList.add(isOutPatient ? "OutPatients" : "InPatients");

    newRow.innerHTML = `<td>${patientID}</td>
                        <td>${fName}</td>
                        <td>${mInitials}</td>
                        <td>${lName}</td>
                        <td>${dob}</td>
                        <td>${department}</td>
                        <td>${isOutPatient ? "Yes" : "No"}</td>`;

    document.getElementById("tbodyPatientsList").appendChild(newRow);
}

// Predefined patients
const patients = [
    { patientID: "EP-001-000001", fName: "John", mInitials: "A", lName: "Elder", dob: "1950-01-01", department: "Cardiology", isOutPatient: false },
    { patientID: "EP-002-000002", fName: "Jane", mInitials: "B", lName: "Doe", dob: "1985-01-01", department: "General", isOutPatient: true },
    { patientID: "EP-003-000003", fName: "Jim", mInitials: "C", lName: "Young", dob: "1995-01-01", department: "Pediatrics", isOutPatient: false },
    { patientID: "EP-004-000004", fName: "Jill", mInitials: "D", lName: "Healthy", dob: "1975-01-01", department: "Orthopedics", isOutPatient: true }
];

// Add predefined patients to the list
patients.forEach(patient => {
    addPatient(patient.patientID, patient.fName, patient.mInitials, patient.lName, patient.dob, patient.department, patient.isOutPatient);
});
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

function addPatient(patientID, fName, mInitials, lName, dob, department, isOutPatient) {
    // Check if the target tbody exists
    const tbodyPatientsList = document.getElementById("tbodyPatientsList");
    if (!tbodyPatientsList) {
        console.error("Error: 'tbodyPatientsList' does not exist.");
        return; // Exit the function to prevent further execution
    }

    // Validate input values (basic example)
    if (!patientID || !fName || !lName || !dob) {
        console.error("Error: Missing required patient information.");
        return;
    }

    try {
        let newRow = document.createElement("tr");
        let agediff = new Date(Date.now() - new Date(dob));
        
        // Additional validation for date could be performed here
        
        newRow.classList.add((agediff.getUTCFullYear() - 1970) > 65 ? "ElderPatient" : "notElder");
        newRow.classList.add(isOutPatient ? "OutPatients" : "InPatients");
        
        newRow.innerHTML = `<td>${patientID}</td>
                            <td>${fName}</td>
                            <td>${mInitials}</td>
                            <td>${lName}</td>
                            <td>${dob}</td>
                            <td>${department}</td>
                            <td>${isOutPatient ? "Yes" : "No"}</td>`;
        
        tbodyPatientsList.appendChild(newRow);
    } catch (error) {
        // Log or handle errors
        console.error("An error occurred while adding a patient: ", error.message);
    }
}

document.getElementById("btnRegisterPatient").addEventListener("click", function(event) {
    event.preventDefault();

    // Assuming element existence validation is done within addPatient or separately before invoking it
    let patientIDNumber = document.getElementById("patientIdNumber");
    let firstName = document.getElementById("firstName");
    let middleInitials = document.getElementById("middleInitials");
    let lastName = document.getElementById("lastName");
    let dateOfBirth = document.getElementById("dateOfBirth");
    let ddlDepartment= document.getElementById("ddlDepartment");
    let radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");

    // Example of an inline validation before function call
    if (!patientIDNumber || !firstName || !lastName || !dateOfBirth) {
        console.error("Error: Required fields must be filled.");
        return;
    }

    // Call addPatient with validated inputs
    addPatient(
        patientIDNumber.value,
        firstName.value,
        middleInitials.value,
        lastName.value,
        dateOfBirth.value,
        ddlDepartment.value,
        radioIsOutPatientYes.checked
    );
});

function addPatient(patientID, fName, mInitials, lName, dob, department, isOutPatient) {
    const tbodyPatientsList = document.getElementById("tbodyPatientsList");
    if (!tbodyPatientsList) {
        console.error("Error: tbodyPatientsList element not found.");
        return;
    }

    if (isNaN(new Date(dob).getTime())) {
        console.error("Error: Invalid date of birth provided for patient", patientID);
        return;
    }

    let newRow = document.createElement("tr");
    let agediff = new Date(Date.now() - new Date(dob));
    newRow.classList.add((agediff.getUTCFullYear() - 1970) > 65 ? "ElderPatient" : "notElder");
    newRow.classList.add(isOutPatient ? "OutPatients" : "InPatients");

    newRow.innerHTML = `<td>${patientID}</td>
                        <td>${fName}</td>
                        <td>${mInitials}</td>
                        <td>${lName}</td>
                        <td>${dob}</td>
                        <td>${department}</td>
                        <td>${isOutPatient ? "Yes" : "No"}</td>`;

    tbodyPatientsList.appendChild(newRow);
}

const patients = [
    { patientID: "EP-001-000001", fName: "John", mInitials: "A", lName: "Elder", dob: "1950-01-01", department: "Cardiology", isOutPatient: false },
    { patientID: "EP-002-000002", fName: "Jane", mInitials: "B", lName: "Doe", dob: "1985-01-01", department: "General", isOutPatient: true },
    { patientID: "EP-003-000003", fName: "Jim", mInitials: "C", lName: "Young", dob: "1995-01-01", department: "Pediatrics", isOutPatient: false },
    { patientID: "EP-004-000004", fName: "Jill", mInitials: "D", lName: "Healthy", dob: "1975-01-01", department: "Orthopedics", isOutPatient: true }
];

patients.forEach(patient => {
    addPatient(patient.patientID, patient.fName, patient.mInitials, patient.lName, patient.dob, patient.department, patient.isOutPatient);
});

document.getElementById("btnRegisterPatient").addEventListener("click", function(event){
    event.preventDefault();
    const patientIDNumber = document.getElementById("patientIdNumber");
    const firstName = document.getElementById("firstName");
    const middleIntials = document.getElementById("middleInitials");
    const lastName = document.getElementById("lastName");
    const dateOfBirth = document.getElementById("dateOfBirth");
    const ddlDepartment = document.getElementById("ddlDepartment");
    const radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");

    if (!patientIDNumber || !firstName || !lastName || !dateOfBirth || !ddlDepartment) {
        console.error("Error: One or more input elements are missing.");
        return;
    }

    let newRow = document.createElement("tr");
    let agediff = new Date(Date.now() - new Date(dateOfBirth.value));
    newRow.classList.add((agediff.getUTCFullYear() - 1970) > 65 ? "ElderPatient" : "notElder");
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

document.getElementById("chkElderlyPatients").addEventListener("click", function(){
    const elderlyPatientChecked = document.getElementById("chkElderlyPatients").checked;
    const notElder = document.getElementsByClassName("notElder");

    if (!notElder) {
        console.error("Error: No patients to filter.");
        return;
    }

    for (const row of notElder) {
        if(elderlyPatientChecked){
            row.classList.add("d-none");
        } else {
            row.classList.remove("d-none");
        }
    }
});

document.getElementById("chkShowOutPatients").addEventListener("click", function(){
    const checkedOutPatients = document.getElementById("chkShowOutPatients").checked;
    const InPatients = document.getElementsByClassName("InPatients");

    if (!InPatients) {
        console.error("Error: No inpatients




