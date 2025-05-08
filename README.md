

---

# Understanding `any`, `unknown`, and `never` in TypeScript

TypeScript enhances JavaScript by adding static typing, helping developers catch errors early. Among its powerful features are three special types: `any`, `unknown`, and `never`. Each serves a unique purpose, and understanding their differences is key to writing safer, more maintainable code.

---

## 1. The `any` Type: Escape Hatch with Risks

The `any` type is the most flexible in TypeScript—it disables type checking, allowing a variable to hold any value and bypassing compile-time errors.

```typescript
let dynamicValue: any = "Hello";
dynamicValue = 42;          // ✅ No error  
dynamicValue = true;        // ✅ No error  
dynamicValue();             // ✅ No error—but risky at runtime!
```

**🔍 Why Avoid `any`?**

* **No type safety:** Methods and properties can be accessed without checks.
* **Hidden bugs:** Errors surface only at runtime.

**✅ Use Case:** Rarely, during gradual migrations or when interacting with untyped libraries.

---

## 2. The `unknown` Type: Type-Safe Alternative

Introduced in TypeScript 3.0, `unknown` is like `any` but enforces type safety. You can assign any value to it, but you must validate its type before use.

```typescript
let userInput: unknown = "Hello TypeScript";

// ❌ Error: Object is of type 'unknown'
// console.log(userInput.toUpperCase());

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());  // ✅ Safe after type check
}
```

**✅ Why Use `unknown`?**

* **Forces type checks:** Prevents accidental operations on unverified types.
* **Safer than `any`:** Retains TypeScript’s safety guarantees.

**Ideal for:** Parsing external data (e.g., API responses) where types are uncertain.

---

## 3. The `never` Type: For Impossible Cases

The `never` type represents values that should never occur. It’s used in two scenarios:

### Example 1: Functions That Never Return

```typescript
function crash(): never {
  throw new Error("Something went wrong");
}

function loopForever(): never {
  while (true) {} // Infinite loop
}
```

### Example 2: Exhaustive Type Checks

```typescript
type Color = "red" | "blue";

function getColorName(color: Color) {
  switch (color) {
    case "red": return "Red";
    case "blue": return "Blue";
    default:
      const neverHappens: never = color; // 🚨 Error if Color is extended
  }
}
```

**🔍 Key Use Cases:**

* Functions that throw or loop infinitely.
* Ensuring all possible types are handled in a switch or conditional.

---

## 🔍 Quick Comparison

| Type      | Can Hold Any Value? | Type-Safe? | Common Use Case                           |
| --------- | ------------------- | ---------- | ----------------------------------------- |
| `any`     | ✅                   | ❌          | Avoid—bypasses type safety                |
| `unknown` | ✅                   | ✅          | Flexible input with mandatory type checks |
| `never`   | ❌                   | ✅          | Impossible cases or unreachable code      |

---

## 🧠 Final Thoughts

* Prefer `unknown` over `any` for safer dynamic typing.
* Use `never` to enforce exhaustive checks and document unreachable code.
* Avoid `any` unless absolutely necessary.

By leveraging these types intentionally, you’ll write more robust and maintainable TypeScript code. 🚀

---
TypeScript Enums: Numeric vs. String
Enums (enumerations) in TypeScript allow developers to define a set of named constants, improving code readability and maintainability.

1. Numeric Enums
Numeric enums auto-increment their values starting from 0 unless specified otherwise.

Example:
typescript
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right,   // 3
}

console.log(Direction.Up); // Output: 0
You can also set custom numeric values:

typescript
enum StatusCodes {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}
2. String Enums
String enums assign string values to each member, making them more readable.

Example:
typescript
enum LogLevel {
    Info = "INFO",
    Warn = "WARNING",
    Error = "ERROR",
}

console.log(LogLevel.Error); // Output: "ERROR"
Why Use Enums?
✅ Self-documenting code – Names replace magic numbers/strings.
✅ Type safety – Prevents invalid assignments.
✅ Easier refactoring – Change values in one place.

When to Avoid Enums?
If tree-shaking (dead code elimination) is a priority (enums generate extra JS code).

For simple key-value pairs, consider using const objects instead.

Final Thoughts
Use numeric enums for sequential values (e.g., status codes).

Use string enums for better debugging and logging.

Enums make your code more expressive while keeping it type-safe! 🚀

