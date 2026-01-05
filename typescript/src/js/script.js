"use strict";
//Typescript: A Javascript nyelv egy részhalmaza, statikus típusosságot ad a nyelvhez
//A typescript kódot mindig fordítani kell, a böngésző nem tud typescriptet futtatni közvetlenül.
let szam = 178;
szam = 928;
//type inference= a jobb oldali érték alapján rendeli a változóhoz a típust
let masikSzam = 613;
let szoveg = "valami";
let logikai = true;
logikai = false;
//union type
let uni;
uni = 334;
uni = "valami";
//literál típus
let elfogadott;
elfogadott = 30;
let szazasok;
szazasok = 100;
//függvények esetében
function osszead(a, b) {
    return a + b;
}
console.log(osszead(45, 34));
//Listák, tömbök
//számokat tartalmazó lista
let szamok = [];
szamok = [2, 3, 45, 78, 122];
let vegyes = ["q", 123, "Z", 667];
let szemely = {
    vezeteknev: "Kiss",
    keresztnev: "Elek",
    kor: 45
};
let dolgozo = ["Kalmár Zénó", 34];
//destruktúrálás tuple-ből
const [nev, eletkor] = dolgozo;
