const arr=[1,2,999,56,"Mithun",1234,"PW"]


for(let i=0;i<arr.length;i++)
{
    let type=typeof arr[i]
  
    if(type=="string")
    {
       console.log("we found the first string = "+arr[i]) 
       break
       
    }
    
   
}