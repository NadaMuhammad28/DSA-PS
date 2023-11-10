class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  gethi() {
    console.log("pp");
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

const s = new Student();
console.log(Student.prototype);
console.log(Person.prototype);
console.log(typeof Person);
console.log(s.__proto__.__proto__.__proto__);
const d = new Date();
console.log(Date.prototype);
console.log(d.__proto__ == Date.prototype);
