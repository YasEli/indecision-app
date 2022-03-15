//arguments object - no longer boound with arrow functions
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(5, 1));

//this keyword -no longer bound

const user = {
    name: 'Yasmin',
    cities: ['Choloma', 'San Pedro Sula', 'Puerto Cortes'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        */
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());