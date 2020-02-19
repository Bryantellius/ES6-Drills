// Arrow Function Expression
// let favMovie = (movie = 'Inception', name = 'world') => {
//     console.log(`My name is ${name} and my favorite movie is ${movie}`);
// }

// Concise Body Syntax, Arrow Expression
let favMovie = movie => {console.log(`My favorite movie is ${movie}.`)};

favMovie(`LOTR`);

let getFirstName = (name) => {
    let first = name.split(' ')
    return first[0]};

let getFirstNameConcise = name => name.split(' ')[0];

console.log(getFirstName('Ben Bryant'));
console.log(getFirstNameConcise('Ben Bryant'));

let math = (a, b) => {
    let exponent = a^b;
    let multiply = a*b;
    return {exponent, multiply};
}

let mathO = math(2, 3);
console.log(`${mathO.exponent}`);
console.log(`${mathO.multiply}`);

let cityFood = (name, location, favFood) => {
    console.log(`My name is ${name}, I live in ${location}, and I like ${favFood}.`);
}

let arr = ['Ben', 'Bhm', 'Hibachi'];

cityFood(...arr);

let name = 'Ben';

let myFunction = (para) => {
    let strArr = [...para];
    console.log(strArr);
    for(let i = 0; i<strArr.length; i++){
        console.log(strArr[i]);
    }
}

myFunction('Barney Stinson');