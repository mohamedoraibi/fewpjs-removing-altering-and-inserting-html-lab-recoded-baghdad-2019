document.getElementById("main").remove();

let element = document.createElement('div');
document.body.appendChild(element);
let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

 element = document.querySelector("p#greeting");
element.innerHTML = 'Hello, DOM!'
let header = document.getElementById("div#header");


header.innerHTML = "<h1 id='victory'>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

content = someTextArea.value;
node.innerHTML = `Hi, ${content}!`;
element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAlign = 'left';
element.className = "dog";
element.className = "pet-listing dog";
element.classList.remove("this-is-fine");
element.classList.add("the-room-is-on-fire");
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove()
let newHeader=document.querySelector('h1#victory');
