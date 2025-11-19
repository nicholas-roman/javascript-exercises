const findTheOldest = function(people) {
    oldestPerson = undefined
    oldestAge = undefined

    for (let person of people) {

        age = 0
        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth
        } else {
            const currentDate = new Date()
            age = currentDate.getFullYear() - person.yearOfBirth
        }

        if (oldestPerson === undefined) {
            oldestPerson = person
            oldestAge = age
            continue
        }

        if (age > oldestAge) {
            oldestPerson = person
            oldestAge = age
        }
    }

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
