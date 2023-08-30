const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

  
  
  const checkResults = (name) =>{
    let found
    for (let stud of students) {
    if(stud.name==name)
    {
        found=1;

         if (stud.marks >= 90) 
         {
            console.log("Congratulation",name,"you have cleared the exam");
        }
        else 
        {
            console.log("Sorry you have not cleare the exam");
        }

    }

  }

  if(found!=1)
  {
    console.log("invalid name")
  }

};


checkResults("Mithun");
checkResults("Prabir");
checkResults("Mithun s");