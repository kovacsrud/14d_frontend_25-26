//Függvények

function osszead(a,b,c){
    return a+b+c;
}

console.log(osszead(1,10,100));

function osszead2(a,b=11,c=111){
    return a+b+c
}

console.log(osszead2(1));
console.log(osszead2(1,10));
console.log(osszead2(1,10,100));

//Tetszőleges számú paraméter??

function sum(){
    let osszeg=0;
    for(let i=0;i<arguments.length;i++){
        osszeg+=arguments[i];
    }
    return osszeg;
}

console.log(sum(3,6,9));
console.log(sum(3,6,9,11,12));
console.log(sum(3,6,9,11,12,123,211));
console.log(sum(3,6,9,11,12,344,112,769,443,211,778));

//Arrow function
//nincs arguments listája

const szum=(a,b,c)=>a+b+c;

console.log(szum(1,2,3));