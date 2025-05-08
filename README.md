# 1. What are some differences between interfaces and types in TypeScript?

### Declaration Syntax :
- **Interfaces**: Defines a shape for objects, typically used for defining object types, and can be extended using `extends`.
- **Types**: Can define more than just object shapes (like unions, intersections, primitive types, etc.). It uses type instead of interface.

### Extending/Inheritance :
- **Interfaces**: Can extend other interfaces (supports extends).
- **Types**: Can extend other types, but with the use of intersections (&).

### Merging :
- **Interfaces**: Interfaces can be merged if I declare the same interface multiple times. This is a feature specific to interfaces.
- **Types**: Does not support merging. If I try to define the same type more than once, TypeScript will throw an error.


# 2. Explain the difference between any, unknown, and never types in TypeScript.

### any:
- The any type disables type checking.
- A variable of type any can be assigned any value, and I can access any property/method on it without compiler error.


### unknown:
- The unknown type is similar to any, but safer.
- I cannot access properties or call methods on a variable of type unknown without first performing a type check.

### never:
- The never type represents values that never occur.
- Typically used for functions that never return



