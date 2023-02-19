const {randomnum} = require("./data");

const p= require("process");
const cmd = p.argv;
//console.log(cmd)
const command =   cmd[2]
const arg1 =    +(cmd[3])
const arg2 =    +(cmd[4])

if(command=="randomnum"){
    console.log(randomnum(arg1,arg2))
}

const cr = require('crypto');
const number = cr.randomInt(arg1,arg2);
console.log("random number is :", number)