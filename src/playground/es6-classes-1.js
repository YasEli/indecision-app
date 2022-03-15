class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;  // name || "test" usa el nombre si existe, sino existe usa "test"
        this.age = age;
    }

    getGretting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let location = super.getGretting();

        if(this.homeLocation) {
            location += ` I'm visiting from ${this.homeLocation}.`;
        }
        return location;
    }
}

const me = new Traveler('Yasmin Coto', 21, 'Honduras');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());