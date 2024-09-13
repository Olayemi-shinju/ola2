let form = document.getElementById('form')
let button = document.getElementById('btn')
let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
let phoneRegex = /^\+?(\d[.\-]*){9,12}(e?xt?\d{1,5})?$/

let isValid = true
let Class = document.getElementById('block')
let input9 = document.getElementById('input9')
const availableClasses = [
    zumba = { type: 'Zumba', slots: 4, },
    Pilates = { type: 'Pilates', slots: 2, },
    Yoga = { type: 'Yoga', slots: 5, },
];

availableClasses.forEach((e) => {
    let option = document.createElement('option');
    option.value = e.type;
    option.text = `${e.type} (${e.slots} slots available)`;
    input9.appendChild(option)
    
})
// 
button.addEventListener('click', function(e){
    e.preventDefault()
    let Jerr = document.getElementById('Jerr')
    let Aerr = document.getElementById('Aerr')
    let Berr = document.getElementById('Berr')
    let Cerr = document.getElementById('Cerr')
    let Derr = document.getElementById('Derr')
    let Eerr = document.getElementById('Eerr')
    let Ferr = document.getElementById('Ferr')
    let Gerr = document.getElementById('Gerr')
    let Herr = document.getElementById('Herr')


    let input = document.getElementById('input').value
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value
    let input3 = document.getElementById('input3').value
    let input4 = document.getElementById('input4').value
    let input5 = document.getElementById('input5').value
    let input6 = document.getElementById('input6').value
    let input7 = document.getElementById('input7').value
    let input8 = document.getElementById('input8').value

    if (input === "") {
        Jerr.innerHTML = "First Name cannot be empty"
        isValid = false
    }
    else {
        Jerr.innerHTML = ""
    }

    if (input1 === "") {
        Aerr.innerHTML = "Last Name cannot be empty"
        isValid = false
    }
    else {
        Aerr.innerHTML = ""
    }
    if (input2 === "") {
        Berr.innerHTML = "Please enter your age"
        isValid = false
    }
    else {
        Berr.innerHTML = ""
    }
    if (input3 === "") {
        Cerr.innerHTML = "Please enter your phone number"
        isValid = false
    }else if(!phoneRegex.test(input3)){
        Cerr.innerHTML = "Please enter a valid phone number"
        isValid = false
    }
    else {
        Cerr.innerHTML = ""
    }
    if (input4 === "") {
        Derr.innerHTML = "Please input a date"
        isValid = false
    }
    else {
        Derr.innerHTML = ""
    }
    if (input5 === "") {
        Eerr.innerHTML = "Please input a time"
        isValid = false
    }
    else {
        Eerr.innerHTML = ""
    }
    if (input6 === "") {
        Ferr.innerHTML = "Please enter an email address"
        isValid = false
    } else if (!emailRegex.test(input6)) {
        Ferr.innerHTML = "Please enter a valid email address"
        isValid = false
    }
    else {
        Ferr.innerHTML = ""
    }
    if (input7 === "") {
        Gerr.innerHTML = "Please select a type of class"
        isValid = false
    }
    else {
        Gerr.innerHTML = ""
    }
    if (input8 === "") {
        Herr.innerHTML = "Enter the number of participant"
        isValid = false
    }
    else {
        Herr.innerHTML = ""
    }

    // if(isValid == true){
    //         Class.style.display="block"
    //         button.style.display="none"
    // }else{
    //       Class.style.display="none"
    // }

    if (slot < input8 && isValid == true) {
        document.getElementById('demo').innerHTML = "There no slot available or this class is occupied"
        Class.style.display = "none"
    } else {
        document.getElementById('demo').innerHTML = ""
        Class.style.display = "block"
        button.style.display = "none"
    }
    if (isValid == false) {
        Class.style.display = "none"
        button.style.display = "block"
    }
    return isValid
})

let close = document.getElementById('close')
let btn1 = document.getElementById('btn1')
let modal = document.getElementById('modal')
let First1 = document.getElementById('First1')
let second = document.getElementById('second')
let p = document.getElementById('p')

function closed() {
    modal.style.display = "none"
}

let slot = 4;

function select() {

    let input = document.getElementById('input').value
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value
    let input3 = document.getElementById('input3').value
    let input5 = document.getElementById('input5').value
    let input6 = document.getElementById('input6').value
    let input7 = document.getElementById('input7').value
    let input8 = document.getElementById('input8').value
    // let input9 = document.getElementById('input9').value


    // let Ierr = document.getElementById('Ierr')

    // if(input9 === ""){
    //     Ierr.innerHTML = "Please select out of the available class"
    //     modal.style.display = "none"
    // }else{
    //      Ierr.innerHTML = ""
    // }

    let block = document.getElementById('block')


    let totalScore = input8 * 600
    if (block === "") {
        Ierr.innerHTML = "Please select a class"
    } else {
        modal.style.display = "block"
        Ierr.innerHTML = ""
    }
    if (input2 < 18) {
        document.getElementById('mine').innerHTML = "Minor"
    } else {
        document.getElementById('mine').innerHTML = ""
    }

    First1.innerHTML = `
        <p>First Name: ${input}</p>
        <p>Last Name: ${input1}</p>
        <p>Age: ${input2}</p>
        <p>Phone: ${input3}</p>
        <p>Email: ${input6}</p>
    `;
   
   
   
   
   
   
    second.innerHTML = `
    <p>Time: ${input5}</p>
    <p>Class selected: ${input7}</p>
    <p>Participant: ${input8}</p>
   `;


   p.innerHTML = `
    <button class="button" type="button" id="pay" onclick="paid()">Book now</button>
   <h1>Total Price: $${totalScore}</h1>
  `;


}


let pay = document.getElementById('pay')

function paid(){
    window.location.href = 'pay.html'
}



