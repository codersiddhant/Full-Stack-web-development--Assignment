console.log("shiping application")
let package="standard"

switch (package){
    case "standard":
        console.log("Might take 3-5 days")
        break;
    

    case "express":
        console.log("Might take 1-2 days")
        break;

    
    case "overnight":
        console.log("delivered the next day")
        break;

    default:
        console.log("package name is wrong")


    

}