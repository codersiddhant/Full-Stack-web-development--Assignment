let carinfo={
    Make:"honda",
    model:"ds-6",
    year:2022
}

function car(carinfo){

    for(let i in carinfo)
    {
        console.log(`${[i]}:${carinfo[i]}`)
    }

    // or anoter method as below - 
    // console.log(carinfo)

}
car(carinfo)
