const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("siddhant", 30, "sk@gmail.com");
addUser("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("siddhant", 31, "sk@gmail.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);
