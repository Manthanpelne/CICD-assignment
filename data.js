const add = (a,b)=>{
    console.log(a+b)
}

const div = (a,b)=>{
    console.log(a/b)
}

const mul = (a,b)=>{
    console.log(a*b)
}
const sub = (a,b)=>{
    console.log(a-b)
}
const sin = (a)=>{
    console.log(Math.sin(a))
}
const cos = (a)=>{
    console.log(Math.cos(a))
}
const tan = (a)=>{
    console.log(Math.tan(a))
}

const randomnum = (min,max)=>{
    console.log( Math.random() * (max - min) + min)
}

module.exports={add,div,mul,sub,sin,cos,tan,randomnum}