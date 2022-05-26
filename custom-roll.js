const prompt = require('prompt-sync')({ sigint: true });

let entry = (prompt(" How many sides do you want your dice to have? 1-50: "));

console.log(Math.ceil(Math.random()*entry));











