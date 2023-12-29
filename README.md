JavaScript :
--------------
- It is developed by Brendeu Each in the year of 1994.
- It is used to create Dynamic webpages.
- It is a dynamically typed language.
  e.g
  console.log("Hello World");
Js Engine :
----------
V8, SpiderMonkey, Chakra

Diff. Between Statically typed and Dynamically typed
-----------------------------------------------------

Statically typed         |        Dynamically typed
-------------------------|--------------------------
- The language which is  |- The language which not
forces the user to define|forces the user to define
the datatype before      |the datatype is called
initilization of a       |and not complusory
Variable is called       |called as dynamically
statically typed.        | typed language.
- ex. c, c++, Java       |- ex. Python, JavaScript
Varibale And DataType:
----------------------
Variable : 
- It is a container which is used to store single value.
- It is a temporary memory location.
- var
- let       Keywords <VariableName> ; (Creation of variable)
- const     <variableName> = 10;  (Initilization)

- let and const are introduced in ES6 (2015).

- When create a variable without initilization then Js engine assigns a default value i.e. undefined

DataTypes:
-----------
-Two types of Data Types.
1. Primitive
2. Non-Primitive
   
Primitive:
----------
1. Number :
   let a = 10;
   let b;
   console.log(a+b);  // NAN (Not A Number)
   b = 20;
   console.log(a+b);  // 30
2. String:
  let str = 'hii ';
  let str1 = "hii";
  let str2 = `hii`; (Templete Leteral String)

 console.log("hii ${1+3}"); // hii ${1+3}
 console.log(`hii ${1+3}`); // hii 4
 console.log(str + `${1+3}`); // hii 4
   
