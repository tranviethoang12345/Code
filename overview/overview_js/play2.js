const person = {
    name: 'Max',
    age: 21,

    //Undefined
    // greet: () => {
    //     console.log('Hi, I am ' + this.name);
    // }

    // greet: function() {
    //     console.log('Hi, I am ' + this.name);
    // }
     
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// console.log(person);
// person.greet();

//array
const hobbies = ['Sports', 'Cooking']; //old value
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => {
//     return 'Hobby:' + hobby;
// }));
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

//add Arrays, Objects & Reference Types
// hobbies.push('Programming');
// console.log(hobbies);

//copy array
// const copiedArray = hobbies.slice();

//Rest Operators work for both array and object
const copiedPerson = {...person};
console.log(copiedPerson);

const copiedArray = [...hobbies];
console.log(copiedArray);

//Create Array(function)
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }
// console.log(toArray(1, 2, 3));

// const toArray = (...args) => {
//     return args;
// }

const toArray = (...args) => args;

console.log(toArray(1, 2, 3, 4, 5));

//arrayFunction
const newArray = [1, 2, 3, 5];
console.log(newArray.map(e => e*2) );