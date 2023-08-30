function generateotp()
{
let no1=Math.floor(Math.random()*10)
let no2=Math.floor(Math.random()*10)
let no3=Math.floor(Math.random()*10)
let no4=Math.floor(Math.random()*10)
return no1.toString()+no2.toString()+ no3.toString()+no4.toString()







}

let result=generateotp()
console.log(result)
