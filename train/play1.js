// var name = 'Max';
// var age = 21;
// var hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return ('Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ' and the user has hobbies: ' + 
//         userHasHobby
//     );
// }

const name = 'Max';
let age = 20;
const hasHobbies = true;

age = 21;

//function
const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
};

// const add = (a, b) => {
//     return a + b;
// }
// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(2));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));