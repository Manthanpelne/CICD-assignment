

// complete the  function
const {add,div,mul,sub,sin,cos,tan} = require("./data");

const p= require("process");
const cmd = p.argv;
//console.log(cmd)
const command =   cmd[2]
const arg1 =    +(cmd[3])
const arg2 =    +(cmd[4])

//console.log(command,arg1,arg2)
if(command=="add"){
    console.log(add(arg1,arg2))
    
}else if(command=="div"){
    console.log(div(arg1,arg2))
}
else if(command=="mul"){
    console.log(mul(arg1,arg2))
}
else if(command=="sub"){
    console.log(sub(arg1,arg2))
}
else if(command=="sin"){
    console.log(sin(arg1))
}
else if(command=="cos"){
    console.log(cos(arg1))
}
else if(command=="tan"){
    console.log(tan(arg1))
}



