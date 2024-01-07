const info = {
  year: 1991,
  name: "dev",
  calAge: function () {
    console.log(2023 - this.year);
    const self = this;
    const isgenz = function () {
      console.log(self.name + " is not " + self.year);
    };
    // isgenz();

    const ismil = () => {
      console.log(this.name + " is not " + this.year);
    };
    ismil();
  },

  greet: () => {
    console.log(`hey ${this.name}`);
  },
};

// console.log(info.calAge());

function hi() {
  //window
  // console.log(this);
  let a = 8;

  const f1 = () => {
    console.log(this.a);
  };
  f1();
}
//

const hiarr = (...args) => {
  argarr = [...args];
  let sum = argarr.reduce((p, c) => {
    return p + c;
  }, 0);

  console.log(sum);
};
//////////////////////////////////////
const obj = {
  name: "nada",
  age: 23,
};

let year = 2022;

function change(person, year) {
  person.age = 24;
  year = 2023;
}

// change(obj, year);

// console.log(obj);
// console.log(year);
const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// console.log(upperFirstWord("world is crazy"));

/// function returna a new function
const f = () => {
  let age = 24;
  return () => 1999 + age;
};

// const res = f();
// console.log(res());
//OR
// console.log(f()());

let objscope = {
  major: "engineering",
  gpa: 2.84,
};

function test(name, age) {
  console.log(
    `${name} has a major in ${this.major} with gpa of ${this.gpa} at age of ${age}`
  );
}

test.call(objscope, "nada", 23);
test.apply(objscope, ["nada", 23]);
const tstwithbind = test.bind(objscope, "nada", 23);
tstwithbind();
