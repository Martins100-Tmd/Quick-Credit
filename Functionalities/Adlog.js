import { Log_Name2, Log_Email2, Log_password2, Log_btn2, Log_EmailErr2, Log_PasswordErr2, Log_NameErr2, Adbody } from './naming.js';
Log_Name2.addEventListener('blur', () => {
    const re = /[A-Za-z]{1,16}-?\s?[A-Za-z]{1,16}$/;
    if (!re.test(Log_Name2.value)) {
        Log_Name2.style.border = "none";
        Log_Name2.style.borderBottom = "2px solid red";
        Log_NameErr2.innerHTML = "Input should contain Letters only*";
        Log_NameErr2.style.color = "red";
        Log_NameErr2.style.fontSize = "12px";
        Log_NameErr2.style.fontFamily = "Poppins";
    }
})
Log_Email2.addEventListener('blur', () => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(Log_Email2.value)) {
        Log_Email2.style.border = "none";
        Log_Email2.style.borderBottom = "2px solid red";
        Log_EmailErr2.innerHTML = "Input should contain Letters only*";
        Log_EmailErr2.style.color = "red";
        Log_EmailErr2.style.fontSize = "12px";
        Log_EmailErr2.style.fontFamily = "Poppins";
    }
    if (Log_Email2.value == "") {
        Log_Email2.style.border = "none";
        Log_Email2.style.borderBottom = "2px solid red";
        Log_EmailErr2.innerHTML = "Input *";
        Log_EmailErr2.style.color = "red";
        Log_EmailErr2.style.fontSize = "12px";
        Log_EmailErr2.style.fontFamily = "Poppins";
    }

})
Log_password2.addEventListener('blur', () => {
    const re = /^[A-Za-z0-9]{8,50}$/;
    if (!re.test(Log_password2.value)) {
        Log_password2.style.border = "none";
        Log_password2.style.borderBottom = "2px solid red";
        Log_PasswordErr2.innerHTML = "Password in wrong format*";
        Log_PasswordErr2.style.color = "red";
        Log_PasswordErr2.style.fontSize = "12px";
        Log_PasswordErr2.style.fontFamily = "Poppins";
    }
    else {
        Log_password2.style.border = "none";
        Log_password2.style.borderBottom = "1px solid black";
        Log_PasswordErr2.innerHTML = "";
    }
})
localStorage.setItem("Admin", JSON.stringify({
    name: "Martins",
    Email: "Olaitanfabayo@gmail.com",
    Password: "Mart100Tmd"
}));
Adbody.addEventListener('click', () => {
    let a = JSON.parse(localStorage.getItem("Admin"));
    if (a.name == Log_Name2.value && a.Email == Log_Email2.value && a.Password == Log_password2.value) {
        Log_btn2.removeAttribute("disabled");
    } else {
        Log_btn2.setAttribute("disabled", true);
    }
})