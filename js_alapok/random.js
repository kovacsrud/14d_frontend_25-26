//Véletlenszámok JS-ben

console.log(Math.floor(Math.random()*(100-10))+10);

function randNum(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

let vnev=["Kiss","Kovács","Kósa","Zsiga","Lengyel","Kozma","Kerepeczki"];
let knev=["Endre","Béla","Elek","Lilla","Zsófia","Ella","Anita"];

//Feladat: véletlenszerű névsor generálása

//50 darab név
let nevek=[];

for(let i=0;i<50;i++){
    let vezeteknev=vnev[randNum(0,vnev.length)];
    let keresztnev=knev[randNum(0,knev.length)];
    //console.log(vezeteknev+" "+keresztnev);
    nevek.push(vezeteknev+" "+keresztnev);
}



//Jelenjenek meg a nevek az index.html-ben is!

root=document.getElementById('root');

for(const nev of nevek){
    let p=document.createElement('p');
    p.textContent=nev;
    root.appendChild(p);
}