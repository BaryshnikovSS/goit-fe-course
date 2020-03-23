const person = {
    age: 10,
    setAge(newAge) {
        this.age = newAge;
    },
    refreshAge(userId) {
        fetchAgeFromDb(function(newAge) {
            this.setAge(newAge);
        });
    },
};
function fetchAgeFromDb(cb) {
    cb(20);
}
person.refreshAge();
console.log(person.age);
// ========= 
const person = {
    age: 10,
    setAge(newAge) {
        this.age = newAge;
    },
    refreshAge(userId) {
        fetchAgeFromDb(function(newAge) {
            this.setAge(newAge);
        }.bind(person));
    },
};
function fetchAgeFromDb(cb) {
    cb(20);
}
person.refreshAge();
console.log(person.age);
// =========
const person2 = {
    age: 10,
    setAge(newAge) {
        this.age = newAge;
    },
    refreshAge(userId) {
        fetchAgeFromDb((newAge) => {
            this.setAge(newAge);
        });
    },
};
function fetchAgeFromDb(cb) {
    cb(20);
}
person2.refreshAge();
console.log(person2.age);