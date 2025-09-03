const szemelyek=["Anna","Péter","Géza","Lajos","Egon"];

const valaki={
    nev:"Lajos Zénó",
    magassag:188,
    suly:96
}

//Hagyományos elérés
console.log(szemelyek[1]);

console.log(valaki.nev);
console.log(valaki.magassag);

//Destruktúrálás objektumból
const {nev,magassag,suly}=valaki;

console.log(nev+" "+magassag);

const {nev:n,magassag:m,suly:s}=valaki;

console.log(n+"-"+m+"-"+s);

const [elso,masodik,...rest]=szemelyek;

console.log(elso,masodik);
console.log(...rest);