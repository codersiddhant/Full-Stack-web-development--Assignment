let student={
    name:"siddhant",
    age:20,
    gred:"A"
}
function checkproperty(student,pro){
    console.log(Object.hasOwn(student,pro))
}
pro="email";
checkproperty(student,pro)
pro="name";
checkproperty(student,pro)

