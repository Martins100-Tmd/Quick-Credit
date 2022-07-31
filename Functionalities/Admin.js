import { current, req1, cleared, VV, RR, PP, UU, users, Vv } from "./naming.js";
import { closemenu, hamburger, menu } from './naming.js';
VV.onclick = () => {
    users.scrollIntoView();
}
RR.onclick = () => {
    current.scrollIntoView();
}
UU.onclick = () => {
    cleared.scrollIntoView();
}
PP.onclick = () => {
    req1.scrollIntoView();
}
hamburger.addEventListener('click', () => {
    menu.style.top = "0%";
})
closemenu.addEventListener('click', () => {
    menu.style.top = "-150%";
});
(function () {
    return new Promise((resolve, reject) => {
        fetch("User.json",
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < data[0].length; i++) {
                    const div = document.createElement('div');
                    div.className = "boxdata";
                    div.style.backgroundColor = "black";
                    div.style.padding = "5px";
                    div.style.borderRadius = "10px";
                    div.style.Width = "300px";
                    div.style.margin = "10px 20px";
                    div.innerHTML = `
                    <div style="width:100%"><img src="${data[0][i].image}" alt="User${i}" style="min-height:100px;width:100%"></div>
                    <div style="color:white;font-family:Poppins;font-size:20px;width:80%">${data[0][i].name}</div>
                    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;width:100%">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:57%">Loan Amount</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:43%;text-align:center">${data[0][i].amount}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:58%">Amount paid</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:40%;text-align:center">${data[0][i].paid}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:57%">Balance</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:40%;text-align:center">${data[0][i].balance}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:30%">Job</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:63%;text-align:center">${data[0][i].job}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:18%">Date</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:70%;font-size:13px;text-align:center">${data[0][i].date}</span >
                        </div>
                    </div>
                        `;
                    current.appendChild(div);
                }
            })
            .catch((err) => reject(console.log(err)));
    })
})();

(function () {
    return new Promise((resolve, reject) => {
        fetch("User.json",
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < data[1].length; i++) {
                    const div = document.createElement('div');
                    div.className = "boxdata";
                    div.style.backgroundColor = "black";
                    div.style.padding = "5px";
                    div.style.borderRadius = "10px";
                    div.style.Width = "300px";
                    div.style.margin = "10px 20px";
                    div.innerHTML = `
                    <div style="width:100%"><img src="${data[1][i].image}" alt="User${i}" style="min-height:100px;width:100%"></div>
                    <div style="color:white;font-family:Poppins;font-size:20px;width:80%">${data[1][i].name}</div>
                    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;width:100%">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:57%">Loan Amount</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:43%;text-align:center">${data[1][i].amount}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:58%">Date</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:40%;text-align:center">${data[1][i].dateofrepay}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:30%">Job</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:60%;text-align:center">${data[1][i].job}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:30%">Rate</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:63%;text-align:center">${data[1][i].rate}%</span >
                        </div>
                    </div>
                        `;
                    req1.appendChild(div);
                }
            })
            .catch((err) => reject(console.log(err)));
    })
})();
(function () {
    let a = [], z = [];
    for (let i = 0; i < localStorage.length; i++) {
        a.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let b = a.filter((item) => {
        return (Object.keys(item).includes("amount"));
    })
    for (let i = 0; i < b.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${b[i].rate}</td>
        <td>N${b[i].amount}</td>
        <td>${b[i].zipcode}</td>
        <td>${b[i].phone}</td>
        <td><button id="approvedbtn" type="button" style="padding:7px;background-color:orangered;color:white;font-family:Poppins;font-weight:600;border-radius:5px">Approve</button></td>
        `;
        cleared.appendChild(row);
    }
})();
document.querySelector('body').addEventListener('click', (e) => {
    let arr = [];
    if (e.target.id == "approvedbtn") {
        e.target.innerHTML = "Approved";
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        setTimeout(() => {
            e.target.setAttribute("disabled", true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, 2000);
    }
    let b = arr.filter((item) => {
        return (Object.keys(item).includes("amount"));
    })
    let d = b.forEach((item) => {
        if (item.zipcode == e.target.parentElement.parentElement.childNodes[5].innerHTML) {
            item.approved = "Approved";
            localStorage.setItem(e.target.parentElement.parentElement.childNodes[5].innerHTML, JSON.stringify(item));
        }
    })
})
document.querySelector('body');
(function () {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let b = arr.filter((item) => {
        return (Object.keys(item).includes("amount"));
    });
    for (let i = 0; i < b.length; i++) {
        if (b[i].approved == "Approved") {
            const div = document.createElement('div');
            div.className = "boxdata";
            div.style.backgroundColor = "black";
            div.style.borderRadius = "10px";
            div.style.Width = "300px";
            div.style.margin = "10px 20px";
            div.innerHTML = `
                    <div style="color:white;font-family:Poppins;font-size:20px;width:100%;text-align:center;background-color:orangered;border-radius:5px 5px 0 0">${b[i].rate}</div>
                    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;width:100%">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:57%">Loan Amount</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:43%;text-align:center">${b[i].amount}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;width:100%">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:38%">Approval</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:60%;text-align:center">${b[i].approved}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:30%">Number</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:60%;text-align:center">${b[i].phone}</span >
                        </div>
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:15px">
                            <p style="font-family:Poppins;font-size:14px;color:white;width:30%">Date</p>
                            <span style="background-color:orangered;color:white;font-family:Roboto;padding:5px;border-radius:5px;width:63%;text-align:center">${b[i].date}</span >
                        </div>
                    </div>
                        `;
            Vv.appendChild(div);
        }
    }

})();

(function () {
    let arr = [], brr = [];
    return new Promise((resolve, reject) => {
        fetch('User.json', {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                arr.push(data.flat());
                for (let i = 0; i < localStorage.length; i++) {
                    brr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
                let b = brr.filter((item) => {
                    return (typeof item.Password == "object");
                })
                arr.push(b.flat());
                for (let i = 0; i < arr.flat().length; i++) {
                    if (typeof arr.flat()[i].name == "object") {
                        const Div = document.createElement('div');
                        Div.className = 'us';
                        Div.style.backgroundColor = "black";
                        Div.style.borderRadius = "5px"
                        Div.style.margin = "10px";
                        Div.innerHTML = `
                    <div style="font-family:Poppins;font-size:15px;color:white;text-align:center;width:100%;background-color:orangered;border-radius:5px 5px 0 0">User ${i}</div>
                    <div style="display:flex;justify-content:space-between;padding:10px;color:white;font-family:Poppins;margin:10px">
                        <p>Name</p>
                        <span>${arr.flat()[i].name.Fname} ${arr.flat()[i].name.Lname}<span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:10px;margin:10px;font-family:Poppins;color:white;width:100%" id="y">
                        <p >Email</p>
                        <span>${arr.flat()[i].Email}<span>
                    </div>`;
                        users.appendChild(Div);
                    } else {
                        const Div = document.createElement('div');
                        Div.className = 'us';
                        Div.style.backgroundColor = "black";
                        Div.style.borderRadius = "5px"
                        Div.style.margin = "10px";
                        Div.innerHTML = `
                            <div style="font-family:Poppins;font-size:20px;color:white;text-align:center;width:100%;background-color:orangered;border-radius:5px 5px 0 0"> User ${i}</div>
                            <div style="display:flex;justify-content:space-between;padding:10px;color:white;font-family:Poppins;margin:10px">
                                <p>Name</p>
                                <span>${arr.flat()[i].name}<span>
                            </div>
                            <div style="display:flex;justify-content:space-between;padding:10px;margin:10px;font-family:Poppins;color:white" id="y">
                                <p>Email</p>
                                <span>${arr.flat()[i].Email}<span>
                            </div>`;
                        users.appendChild(Div);
                    }
                }
            })
            .catch(err => reject(console.log(err)));
    });
})();