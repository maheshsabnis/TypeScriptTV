TypeScript Features
The 'let' keyword, the block scope declaration in ES 6
1. DataTypes
   1. string, number, bool, date, object
   2. any, void
   3. Union Types
   4. Type 
2. Arrays
   1. Class
      1. Methods
         1. push(), pop(), indexOf()
         2. sort(), reverse()
         3. filter(), forEach()
3. Itarators
   1. standard for..loop
   2. for..in loop --> ES 3+
   3. for..of loop --> An iterator in ES 6
      1. Like foreach() loop
4. TemplateString
   1. `${<EXPRESION>}` 
5. Arrow Operators
   1. =>
   2. If a method accespts Callback function as inout parameter, then we can use Arrow operator as a replacement
6. rest Parameters
   1. ...
      1. function fn(...p:[]){....}
7. Classes
   1. Generic
   2. Inheritence
8. OOPs
   1. Class
      1. Public/Private/Protected
         1. Public is default
      2. Static
      3. Constructor
         1. Constructor() is a  method
            1. No OVerloaded 
         2. Parameterized Ctor
            1. Access Spcifier for ctor parameters
9.  Interface
10. Modules
    1.  Define type as exportable to be used as 'exportable type module'   
        1.  Using 'export' keyword
    2.  To import the exportable type using 'import' keyword
        1.  import {<TYPE>} from 'module path'
===========================================================
Install TypeScript
npm install -g typescript

tsc --init

===========================================================================================
EX 1 -> Sort and Reverse data from string array based on string length
EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
      - Find out the indexes and occurances of character 'a' in it
      - Findout number of statements in the string. (value after . symbol) 
      - Convert the first character of the statement in Upper case.




















