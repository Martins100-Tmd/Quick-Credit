import { Log_btn, Log_Name, Log_Email, Log_password, Log_EmailErr, Log_PasswordErr, Log_NameErr, Loginbody } from "./naming.js"
Loginbody.addEventListener('click', Validlogin);
Log_Name.addEventListener('blur', () => {
    const re = /[A-Za-z]{1,16}-?\s?[A-Za-z]{1,16}$/;
    if (!re.test(Log_Name.value)) {
        Log_Name.style.border = "none";
        Log_Name.style.borderBottom = "2px solid red";
        Log_NameErr.innerHTML = "Input should contain Letters only*";
        Log_NameErr.style.color = "red";
        Log_NameErr.style.fontSize = "12px";
        Log_NameErr.style.fontFamily = "Poppins";
    }
})
Log_Email.addEventListener('blur', () => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(Log_Email.value)) {
        Log_Email.style.border = "none";
        Log_Email.style.borderBottom = "2px solid red";
        Log_EmailErr.innerHTML = "Input should contain Letters only*";
        Log_EmailErr.style.color = "red";
        Log_EmailErr.style.fontSize = "12px";
        Log_EmailErr.style.fontFamily = "Poppins";
    }
    if (Log_Email.value == "") {
        Log_Email.style.border = "none";
        Log_Email.style.borderBottom = "2px solid red";
        Log_EmailErr.innerHTML = "Input *";
        Log_EmailErr.style.color = "red";
        Log_EmailErr.style.fontSize = "12px";
        Log_EmailErr.style.fontFamily = "Poppins";
    }

})
Log_password.addEventListener('blur', () => {
    const re = /^[A-Za-z0-9]{8,50}$/;
    if (!re.test(Log_password.value)) {
        Log_password.style.border = "none";
        Log_password.style.borderBottom = "2px solid red";
        Log_PasswordErr.innerHTML = "Password in wrong format*";
        Log_PasswordErr.style.color = "red";
        Log_PasswordErr.style.fontSize = "12px";
        Log_PasswordErr.style.fontFamily = "Poppins";
    }
    else {
        Log_password.style.border = "none";
        Log_password.style.borderBottom = "1px solid black";
        Log_PasswordErr.innerHTML = "";
    }
})
// let LoginInfo = [];
// for (let i = 0; i < localStorage.length; i++) {
//     LoginInfo.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
// }
// function Validlogin(e) {
//     let logincount = 0;
//     console.log(LoginInfo);
//     for (let i = 0; i < LoginInfo.length; i++) {
//         if (Log_Email.value == LoginInfo[i].Email && Log_Name.value == LoginInfo[i].name.Fname && Log_password.value == LoginInfo[i].Password.Password) {
//             console.log(true);
//             logincount++;
//         } else {
//             console.log(false);
//         }
//     }
//     console.log(logincount);
//     e.preventDefault();
// }
Log_btn.setAttribute("disabled", true);
let Infos = [];
function Validlogin() {
    for (let i = 0; i < localStorage.length; i++) {
        Infos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let d = Infos.filter((item) => {
        return (typeof item.Password == "object");
    })
    let b = d.some((item) => {
        return ((item).name.Fname == Log_Name.value && (item).Email == Log_Email.value && (item).Password.Password == Log_password.value);
    })

    if (b == true) {
        Log_btn.removeAttribute("disabled");
    }
}
