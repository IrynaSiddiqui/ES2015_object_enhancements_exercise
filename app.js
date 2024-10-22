/* 1. Same keys and values ES2015 */

function createinstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }     
}

/* 2. Computed Property Names ES2015 */

let favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}


/* 3. Object Methods ES2015 */

const instructorSchool = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!'
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}