class Person {
  // "this" keyword means full object
  // When you'll work with "this", ignore arrow function
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  changeName(name) {
    this.name = name;
  }

  sendEmail(msg) {
    console.log(`sending email ${msg}`);
  }
}

const p1 = new Person("akash", "akash@test.com");
const p2 = new Person("mohosin", "mohosin@test.com");

console.log(p1);
console.log(p2);

p1.changeName("Mohosin hasan Akash");
console.log(p1);
