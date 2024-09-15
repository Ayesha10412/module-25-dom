const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='10px';
}
// where to add
const placeList=document.getElementById('places-list');
// what to do add
const li=document.createElement('li');
li.innerText="Kuakata";
// add the child
placeList.appendChild(li);


// where to add
const mainContainer=document.getElementById('main-container');
// what to be added
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My food List';
section.appendChild(h1);

const ul=document.createElement('ul');

const li1= document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);


const li2= document.createElement('li');
li2.innerText='mutton';
ul.appendChild(li2);


const li3= document.createElement('li');
li3.innerText='beef';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set element directly

const sectionDress=document.createElement('section');
sectionDress.innerHTML= `
<h1>My Dress Section</h1>
<ul>
<li>shirt</li>
<li>Pant</li>
<li>T-shirt</li>
<li>Coat</li>
</ul>

`

mainContainer.appendChild(sectionDress);