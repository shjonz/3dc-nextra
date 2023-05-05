# Day 0: Java Tutorial

> This is an Android workshop, not a Java workshop. This tutorial is tailored to teach you the Java that is necessary for the workshop, and is not exhaustive.

> We assume you have some Python experience from Computatoinal Thinking for Design or Digital World

> Psst, for now, use <https://www.tutorialspoint.com/compile_java_online.php> for an easy-to-use online Java code editor (instead of having to figure out Android Studio). Press the execute on the top left to run your code.
 
## Code Comments

Recall that in Python, you used `#` and `""" """"` for code comments. E.g.

```python
# This is a python comment

print("Not a comment") # Now this is a comment after some code

"""
This is a
multiline python
comment
"""
```

In Java, you use `//` and `/* */` for code comments.

Below is an example (Note that this is not a full program, see the next section for more information):

```java
// This is a Java comment

System.out.println("Not a comment"); // This is a comment after some code

/*
This is a
multiline Java
comment
*/
```

## Printing Hello World To Terminal (Full program)

Below is a Python3 command-line program that prints `Hello World`.

**test.py:**
```python
print("Hello World") # Prints Hello World
```

Here is a Java command-line program that prints `Hello World`.

**Test.java:**
```java
public class Test { // Define class with same name as file
  public static void main(String[] args) { // Defining 'main' function
    System.out.println("Hello World"); // Print "Hello World". Note the ;
  } // Denotes the end of the 'main' function
} // Denotes the end of the 'Test' class
```

**Explanation:**

- **In a typical Java file, any runnable code must be contained within a class. A class is usually specified using the `class` keyword, followed by the name you want to give to the class.**
- The `public` keyword before the `class` is to make the class visible to other Java files.
- **The name of the class is usually the same as the name of the file (without the `.java`)**
- By convention, Java class names (and file names) begin with a capital letter (e.g. `Test`)
- **Curly braces `{ }` are used to section/encapsulate blocks of code** (in Python you used tabs or spaces to section blocks of code for cases like `for` loops)
- All java files end with a `.java` file extension
- For a **Java Command Line Program (Not an Android App)**, the code you want to run at program execution has to be encapsulated inside **a function named main** (i.e. `public static void main(String[] args)`) and curly braces.
- The equivalent of `print()` in Java is `System.out.println()`
- **The end of a line of code must be denoted by a semicolon `;`** (You usually don't put `;` after braces)

Try it out on the online Java editor!

## Variables and Functions

In Java, all variables have types. Some common variable types include:

- `String` (Notice the first letter of String is capitalised)
- `int`
- `double` (Floating-point number)
- `boolean`

Python also has types for its variables, but you dont explicitly declare them. You may have learnt that Python is a **dynamically-typed** language. That is to say, the types of your variables (as well as the return type of your functions) are resolved only at runtime. Consider the following Python program that declares a few variables of different types:

```Python
a = "I am a string" # A string
b = 2 # An int
c = 2.0 # A floating-point number
d = False # A boolean
print(addOne(b)) # Prints 3

def addOne(x): # A function that returns an int
  return x + 1
```

Java is a statically-typed language, meaning types of your variables must be resolved at compile time. Therefore, **you must declare the types of your variables and the return types of your functions.**

This is the Java equivalent program:

```Java
public class Test {
  public static void main(String[] args) {
    String a = "I am a string"; // A string
    int b = 2; // An int
    double c = 2.0; // A floating-point number
    boolean d = false; // A boolean
    System.out.println(addOne(b)); // Prints 3
  }

  // Functions called from another static function (e.g. main) must also be static
  // First int denotes return type of function
  // Second int denotes type of function parameter
  static int addOne(int x) { // Start of function
    return x + 1;
  } // End of function
} 
```

## Type-casting (Strings and Integers)

Recall that in Python, sometimes you need to convert a variable from one type to another (most commonly from `int` to `String` and vice versa). Here is an example

```python
a = 1 # An int
b = str(a) # Convert a to string

c = "2" # A string
d = int(c) # Convert c to int
```

In Java, you perform type-casting this way:

```java
public class Test {
  public static void main(String[] args) {
    int a = 1; // An int
    String b = Integer.toString(a); // Convert a to string

    String c = "2"; // A string
    int d = Integer.parseInt(c); // Convert c to int
  }
}
```

## `If` Statements

Recall in python how to write `if/else` statements to compare strings:

```python
a = "cat"

if a == "dog":
  print("I am a dog")
elif a == "cat":
  print("I am a cat")
else:
  print("I am not a cat or dog")
```

**In Java, not only do `if` statements have a slightly different syntax, `String` comparison is different.**

- `elif` is `else if` in java
- Use curly braces instead of semi-colon
- Use `.equals()` instead of `==` to compare strings *(NOTE: `==` works sometimes (such as in this case), but many other times it doesn't work the way we want it to. See [this post](https://stackoverflow.com/a/513839/10696773) for a good explanation why)*

```Java
public class Test {
  public static void main(String[] args) {
    String a = "cat";

    if (a.equals("dog")) {
      System.out.println("I am a dog");
    } else if (a.equals("cat")) {
      System.out.println("I am a cat");
    } else {
      System.out.println("I am not a cat or dog");
    }
  }
}
```

## Object-Oriented Programming

Declaring a class in Python and creating an instance:

```python
class SomeClass:
  def __init__(self, x, y): # Class constructor
    self.x = x  # Class attribute declared and assigned here
    self.y = y

sc = SomeClass(1, 2) # Instantiate an object of x = 1 and y = 2
print(sc.x) # Prints 1
```

In Java:

- Class attributes (which are also variables) must be **declared within the class itself** at the top level.
- Constructors are defined using the name of the Class itself, instead of `__init__`
- Use `this` instead of `self` to refer to class attributes.
- Declare the type of the class object when instantiating it
- Use `new` keyword during instantiation

Declaring a class in Java and creating an instance:

```java
class SomeClass {
  int x; // Class attribute declared here
  int y;

  SomeClass(int x, int y) {
    this.x = x; // Class attribute assigned here
    this.y = y;
  }
}

public class Test {
  public static void main(String[] args) {
    SomeClass sc = new SomeClass(1, 2); // Instantiate an object of x = 1 and y = 2
    System.out.println(sc.x); // Prints 1
  }
}
```

## References

[Java Tutorial](https://www.w3schools.com/java/default.asp)