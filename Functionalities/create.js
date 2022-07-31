import {
    Fname, Lname, Password, confirm_Password, Message, Email, Create_btn,
    AA, AB, AC, AD, AE, AF, ErrMsg, createbody
} from "./naming.js";
let count = 0;
Fname.addEventListener('blur', A);
Lname.addEventListener('blur', B);
Password.addEventListener('blur', C);
confirm_Password.addEventListener('blur', D);
Email.addEventListener('blur', E);
Message.addEventListener('blur', F);
Create_btn.addEventListener('click', Valid);
function A() {
    let re = /^[A-Za-z]{2,15}-?\s?[A-Za-z]{2,15}$/;

    if (!re.test(Fname.value)) {
        count++;
        Fname.style.border = "none";
        Fname.style.borderBottom = "2px solid red";
        AA.innerHTML = "Letters only should be filled*";
        AA.style.color = "red";
        AA.style.fontSize = "12px";
        AA.style.fontFamily = "Poppins";
        console.log(count);
    } else if (Fname.value == "") {
        count++;
        Fname.style.border = "none";
        Fname.style.borderBottom = "2px solid red";
        AA.innerHTML = "Field is empty*";
        AA.style.color = "red";
        AA.style.fontSize = "12px";
        AA.style.fontFamily = "Poppins";
    }
    else {
        count--;
        AA.innerHTML = "";
        Fname.style.border = "none";
        Fname.style.borderBottom = "1px solid black";
    }
}
function B() {
    let re = /^[A-Za-z]{2,15}-?\s?[A-Za-z]{2,15}$/;

    if (!re.test(Lname.value)) {
        count++;
        Lname.style.border = "none";
        Lname.style.borderBottom = "2px solid red";
        AB.innerHTML = "Letters only should be filled*";
        AB.style.color = "red";
        AB.style.fontSize = "12px";
        AB.style.fontFamily = "Poppins";
        console.log(count);
    } else if (Fname.value == "") {
        count++;
        Lname.style.border = "none";
        Lname.style.borderBottom = "2px solid red";
        AB.innerHTML = "Field is empty*";
        AB.style.color = "red";
        AB.style.fontSize = "12px";
        AB.style.fontFamily = "Poppins";
    }
    else {
        count--;
        AB.innerHTML = "";
        Lname.style.border = "none";
        Lname.style.borderBottom = "1px solid black";
    }
}
function C() {
    const re = /^[A-Za-z0-9]{8,50}$/;

    if (!re.test(Password.value) || Password.value == "") {
        count++;
        Password.style.border = "none";
        Password.style.borderBottom = "2px solid red";
        AD.innerHTML = "minumum of 8 characters: numbers and alphabet*";
        AD.style.color = "red";
        AD.style.fontSize = "12px";
        AD.style.fontFamily = "Poppins";
        console.log(count);
    } else {
        count--;
        AD.innerHTML = "";
        Password.style.border = "none";
        Password.style.borderBottom = "1px solid black";
    }
}
function D() {
    const re = /^[A-Za-z0-9]{8,50}$/;

    if (!re.test(confirm_Password.value) || Password.value == "") {
        count++;
        confirm_Password.style.border = "none";
        confirm_Password.style.borderBottom = "2px solid red";
        AE.innerHTML = "minumum of 8 characters: numbers and alphabet*";
        AE.style.color = "red";
        AE.style.fontSize = "12px";
        AE.style.fontFamily = "Poppins";
        console.log(count);
    } else if (confirm_Password.value != Password.value) {
        count++;
        confirm_Password.style.border = "none";
        confirm_Password.style.borderBottom = "2px solid red";
        AE.innerHTML = "Password not correct*";
        AE.style.color = "red";
        AE.style.fontSize = "12px";
        AE.style.fontFamily = "Poppins";
    }
    else {
        count--
        AE.innerHTML = "";
        confirm_Password.style.border = "none";
        confirm_Password.style.borderBottom = "1px solid black";
    }
}
function E() {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(Email.value)) {
        count++;
        Email.style.border = "none";
        Email.style.borderBottom = "2px solid red";
        AC.innerHTML = "Valid email only*";
        AC.style.color = "red";
        AC.style.fontSize = "12px";
        AC.style.fontFamily = "Poppins";
        console.log(count);
    } else if (Email.value == "") {
        count++;
        Email.style.border = "none";
        Email.style.borderBottom = "2px solid red";
        AC.innerHTML = "Field is empty*";
        AC.style.color = "red";
        AC.style.fontSize = "12px";
        AC.style.fontFamily = "Poppins";
    }
    else {
        count--;
        AC.innerHTML = "";
        Email.style.border = "none";
        Email.style.borderBottom = "1px solid black";
    }
}
function F() {
    if (Message.value == "") {
        count++;
        Message.style.border = "none";
        Message.style.borderBottom = "2px solid red";
        AF.innerHTML = "Input field cannot be empty*";
        AF.style.color = "red";
        AF.style.fontSize = "12px";
        AF.style.fontFamily = "Poppins";
        console.log(count);
    } else {
        count--;
        AF.innerHTML = "";
        Message.style.border = "none";
        Message.style.borderBottom = "1px solid black";
        console.log(count);
    }
}
let CLickcheck = 404;
function Valid(e) {
    if (count > 0) {
        ErrMsg.style.top = "0";
        ErrMsg.innerHTML = "Fail!, Account Empty";
        ErrMsg.style.color = "red";
        ErrMsg.style.textAlign = "center";
    }
    if (count <= 0) {
        ErrMsg.style.top = "0";
        ErrMsg.innerHTML = "Success, Account Created!";
        ErrMsg.style.color = "greenyellow";
        ErrMsg.style.textAlign = "center";
        CLickcheck = 200;
        let store = {
            name: {
                Fname: Fname.value,
                Lname: Lname.value
            },
            Password: {
                Password: Password.value,
                confirm_Password: confirm_Password.value
            },
            Email: Email.value,
            Message: Message.value,
            Status: CLickcheck,
        }
        localStorage.setItem(`${Password.value}`, JSON.stringify(store));
        Create_btn.setAttribute("disabled", true);
    }
    e.preventDefault();
    setTimeout(() => {
        location.href = "login.html";

    }, 1300);
}
let Infos = [];
if (localStorage.key(0) != null) {
    createbody.addEventListener('click', () => {
        for (let i = 0; i < localStorage.length; i++) {
            Infos.push(localStorage.getItem(localStorage.key(i)));
        }
        let b = Infos.some((items) => {
            return (JSON.parse(items).name.Fname == Fname.value && JSON.parse(items).Password.Password == Password.value);
        })
        if (b == true) {
            Create_btn.setAttribute("disabled", true);
        }
    })
}
