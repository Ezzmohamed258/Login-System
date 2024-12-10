const textHello = document.getElementById("textHello");

let x = JSON.parse(localStorage.getItem("currentUser")).Name;
console.log(x);
textHello.innerHTML = `Welcome back , ${x}`;
