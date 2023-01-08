// const oldest = people.sort(function(a, b) {
//     const lastPerson = a.yearOfDeath - a.yearOfBirth;
//     const nextPerson = b.yearOfDeath - b.yearOfBirth;
//     return lastPerson > nextPerson ? -1 : 1;
// });

const findTheOldest = function(array) {    
    const oldestPerson = array.reduce((oldest, currentPerson) => {        
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge > currentAge) {
            return oldest;
        } else {
            return currentPerson;
        }
    });
    return oldestPerson;
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
