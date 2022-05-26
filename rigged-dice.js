const prompt = require('prompt-sync')({ sigint: true });

let entry = Number(prompt("Choose a rigged number for your 6 sided die. This number will show up twice as frequently as others: "));

let roll = Math.ceil(Math.random()*7);

if(roll === 7){
    console.log(entry);
}
 else {
     console.log(roll);
 }

 
