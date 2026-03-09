// ADMIN ACCESS

const userRole = localStorage.getItem("role");

if(window.location.pathname.includes("admin") || window.location.pathname.includes("manage-users")){
    if(userRole !== "admin"){
        window.location.href = "login.html";
    }
}

// LOGIN FUNCTION

function login(){

let username = document.getElementById("username").value;

if(username === "admin"){
localStorage.setItem("role","admin");
window.location.href = "admin.html";
}else{
localStorage.setItem("role","user");
window.location.href = "profile.html";
}

}

// ADD USER

function addUser(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let role = document.getElementById("role").value;

if(name === "" || email === ""){
alert("Please fill all fields");
return;
}

let table = document.getElementById("userTable");

let row = table.insertRow();

row.innerHTML = `
<td>${table.rows.length}</td>
<td>${name}</td>
<td>${email}</td>
<td>${role}</td>
<td><button onclick="deleteRow(this)">Delete</button></td>
`;

}

// DELETE USER

function deleteRow(btn){
let row = btn.parentNode.parentNode;
row.remove();
}