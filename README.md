# generate-password
This bit of code will simply prompt user for aspects of a password and then create one for them.


## My Pseudo code used when creating the code to create this program.

**I might not have used all of this exactly, but this is the original throught. This is sorta in order..**

* Required to have minimum 8 characters. WE can ask for at least that and if they provide 7, just make it default to 8
* ask about uppercase
* ask about lowercase
* ask about special characters
* ask about numbers
* after selections, the generator will crunch them all together in some random order picking some from here and some from there.
*    If all numbers, or if all of one  type, this should be straight forward to use a random generator to go the a list of that type and pull a character
*    If there is a mix of two types or three, the generator will generate through which one to use, then go through that type and pull a character
*    When all characters are generated the meets the length required, exit this function and ...
* generator will spit out the password in the box.
* you have the option to continue doing this process

* Create a random function that accepts typd and index required to generate a character. 
*    ... can it be generic and used by lowercase, uppercase, number and special characters?

* Create a function to ask for size of password
* Create a function to ask about upper, and then lower, and then special, and then numbers