let p1=new Promise((resolve,reject)=>{
    resolve(1500);
});

p1.then(szam=>console.log(szam));

let p2=function(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("Az a értéke nem lehet kisebb, mint b!");
        }
    });
}

p2(50,10).then(nagyobb=>console.log(nagyobb)).catch(err=>console.log(err));

function novel(szam){
    return szam+10;
}

p2(50,10).then(ertek=>novel(ertek)).then(ertek=>console.log(ertek)).catch(err=>console.log(err));

async function promiseok(){
    try {
        let adat1=await p1;
        let adat2=await p2(adat1,1600);

        console.log("Async: "+adat2);
        
    } catch (error) {
        console.log(error);
    }
}

promiseok();

//Több, egymástól nem függő promise futtatása

const all=Promise.all([p1,p2(40,10)]);

all.then(ertekek=>console.log(ertekek)).catch(err=>console.log(err));