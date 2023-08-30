
function calculatetotalcartvalue()
{
    let sum=0
    for (let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i]
           
    }
    return sum 
    

}

let result=calculatetotalcartvalue(125,20,30);
console.log("total cart value is = ",result)