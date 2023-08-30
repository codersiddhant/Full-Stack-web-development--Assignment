let users=["siddhant","Mithun","rohan","pranav"]



function isUserPresent(uname)
{
    if(users.includes(uname))
    {
        console.log("yes",uname,"is valid user")
    }
    else
    {
        console.log("No",uname,"is not valid user")
    }
}

isUserPresent("Mithun")
isUserPresent("someone")