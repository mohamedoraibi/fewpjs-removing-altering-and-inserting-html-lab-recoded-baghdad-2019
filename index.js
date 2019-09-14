document.getElementById("main").remove();

let element = document.createElement('h1');
document.body.appendChild(element);
document.getElementsByTagName("h1")[0].setAttribute("id", "victory");
let newHeader = document.getElementById('victory');
let NAME="Mohammed"
document.getElementById("victory").innerHTML=`${NAME} is the champion`;
