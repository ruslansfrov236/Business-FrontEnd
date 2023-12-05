const emailInput = document.getElementById("email");
const btnContact = document.querySelector(".btn-contact");
const privacePolicy = document.getElementById("policy");
const btnForm = document.querySelector(".btn-form");
const btnStarted= document.querySelectorAll('.btn-started')


const formConnect = (event) => {
    const nameInput = document.getElementById("name").value;
    const surNameInput = document.getElementById("surname").value;
    const phoneInput = document.getElementById("phone").value;
    const emailValueInput = document.getElementById("emailValue").value;

    let isCheckboxChecked = privacePolicy.checked;
    if (isCheckboxChecked ) {
        console.log(`email:${emailValueInput} name:${nameInput} surname:${surNameInput} phone:${phoneInput}`);

        location.href = "thanks.htm";
    } else {
        alert(" checked edin !")
    }
}
const emailBox = (event) => {
    const email = emailInput.value;
    console.log(email);
};

document.addEventListener('DOMContentLoaded', function () {
    btnStarted.forEach(element=>{
  
        const title = element.getAttribute("data-value");
         element.addEventListener("click" , (event)=>{
             console.log(title)
             location.href = "thanks.htm";
         })
     })
    btnForm.addEventListener("click", formConnect);
    btnContact.addEventListener("click", emailBox);
});

