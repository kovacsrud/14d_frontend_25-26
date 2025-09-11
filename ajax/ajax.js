let keres=new XMLHttpRequest();
let valasz="";

let root=document.getElementById('root');


keres.open('GET','https://jsonplaceholder.typicode.com/posts',true);

keres.onload=function(){
    //ebben a függvényben kell kezdeni valamit az adatokkal
    valasz=JSON.parse(this.response);

    console.log(valasz);
    valasz.forEach(elem=>{
        let id=document.createElement('p');
        let cim=document.createElement('p');
        let hozzaszolas=document.createElement('p');
        id.textContent=elem.id;
        cim.textContent=elem.title;
        hozzaszolas.textContent=elem.body;
        root.appendChild(id);
        root.appendChild(cim);
        root.appendChild(hozzaszolas);
    })

}

//keres.send();

//fetch használata
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(valasz=>{
    if(Array.isArray(valasz)){
        valasz.forEach(elem=>{
            let id=document.createElement('p');
            let cim=document.createElement('p');
            let hozzaszolas=document.createElement('p');
            id.textContent=elem.id;
            cim.textContent=elem.title;
            hozzaszolas.textContent=elem.completed;
            root.appendChild(id);
            root.appendChild(cim);
            root.appendChild(hozzaszolas);
        })

    } else {
        let hibauzenet=document.createElement('p');
        hibauzenet.textContent="Adat nem található";
        root.appendChild(hibauzenet);
    }

})
.catch(err=>console.log("Hiba: "+err));

//async await szintaktika

async function letoltes(){
    try {
        let keres= await fetch('https://jsonplaceholder.typicode.com/users');
        let valasz=await  keres.json();

         if(Array.isArray(valasz)){
           valasz.forEach(elem=>{
              let id=document.createElement('p');
              let name=document.createElement('p');
              let username=document.createElement('p');
              id.textContent=elem.id;
              name.textContent=elem.name;
              username.textContent=elem.username;
              root.appendChild(id);
              root.appendChild(name);
              root.appendChild(username);
        })} else {
              let hibauzenet=document.createElement('p');
              hibauzenet.textContent="Adat nem található";
              root.appendChild(hibauzenet);
            }



        
    } catch (error) {
        alert("Hiba: "+error)
    }

}

letoltes();