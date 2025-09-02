let nevek=["ELek","András","Jakab","Géza","Ella"];

for(let i=0;i<nevek.length;i++){
    console.log(nevek[i]);
}
console.log("-------------------");

for(const i in nevek){
    console.log(nevek[i]);
}

console.log("-------------------");

for(const i of nevek){
    console.log(i);
}

console.log("While (elöltesztelő) ciklus");

let start=0;
while(start<nevek.length){
    console.log(nevek[start]);
    start++;
}

console.log("Hátultesztelő ciklus (do while)");

start=0;
do{
    console.log(nevek[start]);
    start++;
} while(start<nevek.length)

    