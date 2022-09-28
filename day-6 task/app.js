// OOPS 

// 1

class movie {
    constructor(title, movie, rating) {
        this.title = title;
        this.movie = movie;
        this.rating = rating;
    }
}

let res = new movie("Casino Royale", "Eon Productions", "PG­13")
console.log(res.title, res.movie, res.rating);

// 3
class person {
    constructor(fistName, lastName, age,) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.age = age;
    }
}

let result = new person("vasanth", "MN", 12)

console.log(result);


class price {
    constructor(a, b) {
        this.a = a;
        // this.b = b;


    }
}


let r = new price(12 * 2)

console.log(r);

