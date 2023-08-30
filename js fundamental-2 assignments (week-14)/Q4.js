const products=
[
    {name:"Lapto",price:120000},
    {name:"Mobile",price:70000},
    {name:"Lapto Bag",price:20000},
    {name:"Watch",price:12000},
    {name:"Mobile Charger",price:1500},
];

let maxprice=0;
let pname
for(let p of products)
{
    if(p.price>maxprice)
    {
            maxprice=p.price; 
            pname=p.name  
    }
}

let minprice=maxprice;

for(let p of products)
{
    if(p.price<minprice)
    {
            minprice=p.price; 
            pname=p.name  
    }
}
console.log("the product with maximum amount is",pname,"which is priced at RS",maxprice)
console.log("the product with minium amount is",pname,"which is priced at RS",minprice)

