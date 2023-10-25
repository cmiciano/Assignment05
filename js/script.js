// OPTION 1
const $ = (id) => document.getElementById(id)

function gatherElements() {
    let inpForm = $('empForm')
    let inpID = $('id')
    let inpName = $('name')
    let inpExt = $('ext')
    let inpEmail = $('email')
    let inpDept = $('department')

    inpForm.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log(`ID: ${inpID.value}`);
        console.log(`Name: ${inpName.value}`);
        console.log(`Extension: ${inpExt.value}`);
        console.log(`Email: ${inpEmail.value}`);
        console.log(`Department: ${inpDept.value}`);
    });    
}

window.addEventListener('load', gatherElements)



