var nameVar = 'Andrew';

var nameVar = 'Yasmin';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Mia';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping
var fullName = 'Yasmin Coto';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);