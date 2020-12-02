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
const hobbies = ['Sports', 'Cooking']
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => {
//     return 'Hobby:' + hobby;
// }));
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);