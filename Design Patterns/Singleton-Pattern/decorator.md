The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. It is used to extend the functionalities of classes in a flexible and reusable way.

### Key Concepts

1. **Component**: The interface or abstract class defining the behavior that can be dynamically extended.
2. **Concrete Component**: The class that implements the `Component` interface or inherits from the abstract class. This is the class to which additional behavior can be added.
3. **Decorator**: An abstract class implementing the `Component` interface and containing a reference to a `Component` object. The `Decorator` class delegates all operations to the `Component` object.
4. **Concrete Decorator**: A class that extends the `Decorator` class and adds additional behavior.

### UML Diagram

Here's a simplified UML diagram of the Decorator Pattern:

```
 +-------------+   +-------------------+
 |  Component  |<--| ConcreteComponent |
 +-------------+   +-------------------+
       ^                    ^
       |                    |
 +-------------+     +---------------+
 |  Decorator  |<--->| ConcreteDecorator |
 +-------------+     +---------------+
```

### Example

Let's look at an example to better understand the Decorator Pattern. Suppose we have a simple `Coffee` interface that we want to extend with additional features like milk, sugar, and more.

#### Step 1: Define the Component

```typescript
interface Coffee {
  cost(): number;
  description(): string;
}
```

#### Step 2: Implement the Concrete Component

```typescript
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Simple coffee';
  }
}
```

#### Step 3: Implement the Decorator

```typescript
class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(decoratedCoffee: Coffee) {
    this.decoratedCoffee = decoratedCoffee;
  }

  cost(): number {
    return this.decoratedCoffee.cost();
  }

  description(): string {
    return this.decoratedCoffee.description();
  }
}
```

#### Step 4: Implement Concrete Decorators

```typescript
class MilkDecorator extends CoffeeDecorator {
  constructor(decoratedCoffee: Coffee) {
    super(decoratedCoffee);
  }

  cost(): number {
    return super.cost() + 2;
  }

  description(): string {
    return super.description() + ', milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(decoratedCoffee: Coffee) {
    super(decoratedCoffee);
  }

  cost(): number {
    return super.cost() + 1;
  }

  description(): string {
    return super.description() + ', sugar';
  }
}
```

#### Step 5: Use the Decorators

```typescript
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.description() + ' costs ' + simpleCoffee.cost());

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.description() + ' costs ' + milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.description() + ' costs ' + sugarMilkCoffee.cost());
```

### Output

```
Simple coffee costs 5
Simple coffee, milk costs 7
Simple coffee, milk, sugar costs 8
```

### Explanation

1. **SimpleCoffee** is the basic component implementing the `Coffee` interface.
2. **CoffeeDecorator** is an abstract class that implements the `Coffee` interface and delegates the methods to the decorated coffee object.
3. **MilkDecorator** and **SugarDecorator** extend `CoffeeDecorator` and add their own functionality.
4. The decorators are used to add functionalities dynamically to the `SimpleCoffee` object.

### Advantages of the Decorator Pattern

1. **Flexibility**: You can mix and match decorators to create different combinations of behavior.
2. **Single Responsibility Principle**: Each class has a single responsibility, making the system more manageable and scalable.
3. **Open/Closed Principle**: Classes are open for extension but closed for modification. You can extend the behavior of objects without altering their code.

### When to Use the Decorator Pattern

- When you want to add responsibilities to individual objects, not to an entire class.
- When you need to add behavior to objects dynamically and transparently.
- When extension by subclassing is impractical due to the large number of extensions or independent extensions that can be combined.

The Decorator Pattern is a powerful tool in object-oriented design, allowing for flexible and reusable code that can be extended dynamically.
