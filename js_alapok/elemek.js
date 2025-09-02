root=document.getElementById('root');

//Lista létrehozása
let cimsor2=document.createElement('h2');
cimsor2.textContent="Névsor";

root.appendChild(cimsor2);

let lista=document.createElement('ul');

let listaelem1=document.createElement('li');
listaelem1.textContent="Elek";
lista.appendChild(listaelem1);

let listaelem2=document.createElement('li');
listaelem2.textContent="Zénó";
lista.appendChild(listaelem2);

let listaelem3=document.createElement('li');
listaelem3.textContent="Ubul";
lista.appendChild(listaelem3);

root.appendChild(lista);
