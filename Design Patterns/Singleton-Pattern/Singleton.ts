export class SingletonCounter {
  private static instance;

  counter = 0;

  private constructor() {}

  incrementCounter() {
    this.counter++;
  }
  static getInstance() {
    if (!this.instance) this.instance = new SingletonCounter();
    return this.instance;
  }
}

// const obj = new Singleton() //error

const obj1 = SingletonCounter.getInstance();
const obj2 = SingletonCounter.getInstance();

obj1.incrementCounter();
console.log(obj1.counter); //1
console.log(obj2.counter); //1
