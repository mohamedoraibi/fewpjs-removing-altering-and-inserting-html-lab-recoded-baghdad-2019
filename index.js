document.getElementById("main").remove();

let element = document.createElement('h1');
document.body.appendChild(element);
document.getElementsByTagName("h1")[0].setAttribute("id", "victory");
let newHeader = document.getElementById('victory');
document.getElementById("victory").innerHTML('is the champion');
