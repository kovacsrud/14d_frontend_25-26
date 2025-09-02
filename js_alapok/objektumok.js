//Objektumok

let szemely={
    vezeteknev:"Kósa",
    keresztnev:"Zénó",
    szulev:1979,
    kor() {
        return new Date().getFullYear()-this.szulev
    }
};

console.log(szemely);
console.log(szemely.vezeteknev+" "+szemely.keresztnev+" Kor:"+szemely.kor());

//Osztály deklaráció
class Szemely {
    constructor(vezeteknev,keresztnev,szuletesiev){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.szuletesiev=szuletesiev;
    }
    kor() {
        return new Date().getFullYear()-this.szuletesiev;
    }
}

let zoltan=new Szemely("Novák","Zoltán",2002);
let imre=new Szemely("Kiss","Imre",1971);

console.log(zoltan.vezeteknev);
console.log(zoltan.keresztnev);

console.log(imre.vezeteknev);
console.log(imre.keresztnev);