function hasUniqueCharacters(username) {
    const charSet = new Set();

    for (const char of username) {
        if (charSet.has(char)) {
            console.log("String is unique")
        }
        charSet.add(char);
    }

    console.log("String contain duplicate value") 
}

const username1 = "Mithun";
const username2 = "anurag";

console.log(hasUniqueCharacters(username1));
console.log(hasUniqueCharacters(username2)); 
