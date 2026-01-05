//Typescript: A Javascript nyelv egy részhalmaza, statikus típusosságot ad a nyelvhez
//A typescript kódot mindig fordítani kell, a böngésző nem tud typescriptet futtatni közvetlenül.

let szam:number=178;

szam=928;

//type inference= a jobb oldali érték alapján rendeli a változóhoz a típust
let masikSzam=613;

let szoveg="valami";

let logikai=true;

logikai=false;

//union type

let uni:string|number;
uni=334;
uni="valami";

//literál típus

let elfogadott:10|20|30;
elfogadott=30;

type ElfogadottTipus=100|200|300;

let szazasok:ElfogadottTipus;

szazasok=100;

//függvények esetében

function osszead(a:number,b:number){
    return a+b;
}

console.log(osszead(45,34));

//Listák, tömbök
//számokat tartalmazó lista
let szamok:Array<number>=[];
szamok=[2,3,45,78,122];

type Vegyes=(string|number)[];

let vegyes:Vegyes=["q",123,"Z",667];

//összetett típusok

type Szemely={
    vezeteknev:string,
    keresztnev:string,
    kor:number,
    kepek?:Array<Kep>
}

interface Kep {
    fajnev:string,
    szelesseg:number,
    magassag:number
}

let szemely:Szemely={
    vezeteknev:"Kiss",
    keresztnev:"Elek",
    kor:45
}

//tuple

type Dolgozo=[nev:string,eletkor:number];

let dolgozo:Dolgozo=["Kalmár Zénó",34];

//destruktúrálás tuple-ből
const[nev,eletkor]=dolgozo;