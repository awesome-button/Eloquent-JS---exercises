
function Bird(name) {
    this.legs = 2;
    this.name = name;
}

Bird.prototype = {
    constructor: Bird,
    fly: function() {
        console.log('flying');
    }
}

function Animal() {
    this.legs = 4;
};

Animal.prototype = {
    constructor: Animal,
    speak: function() {
        console.log("blablabla");
    }
}

//Bird inherits method speak from Animal

Bird.prototype.speak = Animal.prototype.speak;

//Same but with class syntax

class Bird {
    constructor(name) {
        this.name = name;
        this.legs = 2;
    }
    fly() {
        console.log('flying');
    }
}

class Animal {
    constructor() {
        this.legs = 4;
    }
    speak() {
        console.log('balblabla');
    }
}