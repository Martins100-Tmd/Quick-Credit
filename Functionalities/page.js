import {
    closemenu, hamburger, menu, page_amount, page_btn, page_duration, page_num,
    page_pwd, page_rate,
    Appdate, Countdown, page_zip, page_body, slideclose, Log_btn, Stat, Hom,
    Req, Mode, slide, Tl, time, repay, statusPword, paid, Stat2, Loansuccess, Pbody
} from './naming.js';
Mode.onclick = () => {
    Pbody.style.backgroundColor = "blue";
    page_body.style.backgroundColor = "gray";
    page_body.style.color = "white";
}
document.querySelector('.lk').onclick = () => {
    page_body.style.backgroundColor = "rgb(36, 16, 56)";
    page_body.style.color = "white";
}
statusPword.addEventListener('input', () => {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let a = arr.filter((item) => {
        return (item.zipcode == statusPword.value);
    })
    Tl.innerHTML = "N" + a[0].amount;
    time.innerHTML = a[0].date;
    paid.innerHTML = "0000";
    Countdown.innerHTML = "12%";
    repay.innerHTML = a[0].approved;
    if (a[0].approved == "Approved") {
        repay.style.backgroundColor = "green";
        Tl.style.backgroundColor = "green";
        time.style.backgroundColor = "green";
        paid.style.backgroundColor = "green";
        Countdown.style.backgroundColor = "green";
        Appdate.innerHTML = `0${new Date().getDay() + 1} - 0${new Date().getMonth() + 1} - ${new Date().getFullYear()}`;
        Appdate.style.backgroundColor = "green";
    }
    setTimeout(() => {
        statusPword.setAttribute("disabled", true);
    }, 1000)
})
Stat2.addEventListener('click', () => {
    slide.style.left = "0";
})
Stat.addEventListener('click', () => {
    slide.style.left = "0";
})
slideclose.addEventListener('click', () => {
    slide.style.left = "-100%";
})
hamburger.addEventListener('click', () => {
    menu.style.top = "0%";
})
closemenu.addEventListener('click', () => {
    menu.style.top = "-150%";
})

page_body.addEventListener('click', pageValid);
page_btn.setAttribute("disabled", true);
function pageValid() {
    let arr = [];

    for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let c = arr.some((item) => {
        return (item.password == page_pwd.value && item.zipcode == page_zip.value);
    })
    if (page_amount.value == "" || page_duration.value == "" || page_num.value == "" || page_rate.value == ""
        || page_pwd.value == "" || page_zip.value == "" && c == true) {
        page_btn.setAttribute("disabled", true);
    } else {
        page_btn.removeAttribute("disabled");
        page_body.addEventListener('click', storeRequest);
    }
    if (c == false) {
        return;
    } else {
        page_btn.setAttribute("disabled", true);
    }
}
function storeRequest() {
    let a = new Date();
    let request = {
        amount: page_amount.value,
        duration: page_duration.value,
        phone: page_num.value,
        rate: page_rate.value,
        password: page_pwd.value,
        zipcode: page_zip.value,
        date: `${a.getDay()} - ${a.getMonth()} - ${a.getFullYear()}`,
        approved: "Pending",
    }
    localStorage.setItem(`${page_zip.value}`, JSON.stringify(request));
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let c = arr.filter((item) => {
        return (typeof item.Password == "object");
    })
    let d = c.some((item) => {
        return (item.Password.Password == page_pwd.value);
    })
    if (d == true) {
        page_btn.setAttribute("disabled", true);
        page_amount.setAttribute("disabled", true);
        page_duration.setAttribute("disabled", true);
        page_num.setAttribute("disabled", true);
        page_rate.setAttribute("disabled", true);
        page_pwd.setAttribute("disabled", true);
        page_zip.setAttribute("disabled", true);
        window.onload = () => {
            page_btn.setAttribute("disabled", true);
        }
        setTimeout(() => {
            Loansuccess.innerHTML = "Loan request sent successfully!.";
            Loansuccess.style.color = "green";
            Loansuccess.style.fontFamily = "Poppins";
            Loansuccess.style.textAlign = "center";
        }, 1000);
    }
    window.onload = () => {
        page_btn.setAttribute("disabled", true);
    }
    let g = c.filter((item) => {
        return (typeof item.amount == "number")
    })
}