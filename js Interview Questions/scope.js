//scoping
//sec 8- jonas
function calAge(year) {
  const age = 2023 - year;
  console.log(name);
  //hs didn't see the var 'name' so it did a var lookup to the parent scope

  function printYear() {
    console.log(year);
  }
  printYear();

  return age;
}
//-------------------------------------------------------------------------
//Q-1
var text = "outside";
function logIt() {
  console.log(text);
  var text = "inside";
}
// logIt();

//-------------------------------------------------------------------------
//Q-2
//-------------------------------------------------------------------------

/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
// (() => {
//   let one, two;
//   try {
//     throw new Error(`eee`);
//   } catch (one) {
//     (one = 123), (two = 321);
//     console.log(one);
//   }
//   console.log(one);
//   console.log(two);
// })();

//123
//undefined
//321
//-------------------------------------------------------------------------
//Q-3
//-------------------------------------------------------------------------
// What is the output of:

// let x = "red";
// {
//   let x = "green";

//   console.log("1: ", x);

//   (function () {
//     console.log("2: ", x);

//     var x = "blue";

//     console.log("3: ", x);
//   })();
// }

// console.log("4: ", x);

//
//----------------------------------------------------
var global = "global";
const foo = () => {
  console.log(global);
  const bar = () => {
    console.log("from bar", global);
  };
  bar();
};
// foo();
//----------------------------------------------------
//Q-5
//----------------------------------------------------
//scoping

//variable shadowing: redeclaring same var name in another scope (the twos has to be let)
//illegal shadwoin :

function q5() {
  let x = "hell";
  let b = "die ";
  {
    //var shadwoing
    let x = " yeah";
    let b = "bitch";

    console.log(x);
    console.log(b);
  }

  console.log(x);
  console.log(b);
}

// q5();

//----------------------------------------------------
//Q-6
//----------------------------------------------------
var greeting = "what up";

function tr() {
  console.log("a", greeting);

  if (greeting === "hello") {
    const greeting = "bi";
    console.log("b", greeting);
  }

  if (greeting === "what up") {
    console.log("c", greeting);
    greeting = "hello";
  }

  var greeting = "mnj";
  console.log("d", greeting);
  if (greeting === "mnj") {
    let greeting = "hola";
    console.log("e", greeting);
  }
}
greeting = "bye";
// console.log("f", greeting);
// tr();

//////////////////////////////////////////////////////////////////
// (function () {
//   var a = (b = 3);
// })();

// console.log("a defined? " + (typeof a == "undefined"));
// console.log("b defined? " + (typeof b == "undefined"));
// console.log(a);
//////////////////////////////////////////////////////////
//What will the code below output to the console and why?
//////////////////////////////////////////////

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); //o=>bar
    console.log("outer func:  self.foo = " + self.foo); //=> bar
    (function () {
      this.foo = "oo";
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();
/*
--------------------------------------------------------------
function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}
/*
///////////////////////////////////////////////////////////////////////////////
const isPalindrom = (s) => {
  const regex = /[^A-Za-z0-9]/g;
  const str = s.replace(regex, "").toLowerCase();
  console.log(str);
  let l = 0;
  let h = str.length - 1;
  let flag = true;

  while (l <= h) {
    if (str[l] === str[h]) {
      console.log(str[l], str[h], flag);

      flag && true;
    } else {
      flag = false;
    }
    l++;
    h--;
  }
  return flag;
};

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
*/
let d = {};
["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

console.log(d);
