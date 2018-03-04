# Cleancalc

This project is designed to illustrate one of, if not __the most__, fundamental principle of software designs:

> SEPARATION OF CONCERNS

"Separation of concerns" means that each file, each piece of code, has one simple and well defined purpose.  In this project you will be exploring the separation of UI framework, input handling, and application logic.  You will build a basic calculator object then use that same object to take arguments from the terminal and the browser.  The concerns are:
* Logic - the cleancalc object
* Handler - process.argv, event listeners
* UI - command line, HTML

It is very important that you build your calc object with exactly the property names, arguments, and return values specified.  Doing this is called "developing to an interface".  If you do this correctly you will be able to replace anyone's cleancalc object with yours and your application will continue working.  The magic of software design!

Understanding this principle will help with testing, development scheduling, collaboration, maintenance, ... _everything_. In our experience, understanding separation of concerns is the most important thing a new programmer can learn.  More important than learning hip libraries, fly devtools, and even more important than being very good at solving programming challenges.  

So if this project feels too easy and you find yourself wanting to make it more complicated, remember that the code isn't the point of this project.  The design is the point.  Pay attention to how we use specs to define and develop the calculator.

To see how well you did, go to the "cleancalc" channel on Slack to share objects.  Try swapping out your object for someone else's, if your application still works you both did it right.  There is no other way to know.

### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)

---

## Learning Objectives

* Separation of concerns
* Developing from specs
* Logic vs. Framework
* Basic collaboration (trading calc objects)
* Basic OOP

[TOP](#index)

---

## Specifications

This project has several steps to it

1. Build an object to match [these specs](https://github.com/elewa-academy/Fundamentals/blob/master/docs_src/3-cleancalc/cleancalc-series/1-cleancalc.js). 
2. Write a JS file to take command line arguments and pass them into your calculator. There is a link that explains "process.argv" [at the bottom of this file](https://github.com/elewa-academy/Fundamentals/blob/master/docs_src/3-cleancalc/cleancalc-series/1-cleancalc.js).
3. Reuse your calc object in a basic browser app.  The event handlers will take the user's input, pass it through the calc object, and display the results to the users.  There should only be one line in each event handler that uses the calc object, it will look something like this:
    ```js
        ...
        // get user input from the DOM
        var result = cleancalc.operate(selected_op, arg1, arg2);
        // write 'result' into the DOM
        ...
    ```
    Your project should have this structure:
    * index.html
    * /public
      * event-handlers.js
      * cleancalc.js
4. Make a repo for this project, put it on your portfolio.
5. Go to Slack and trade calcs. Witness _dependency injection_ first hand!


[TOP](#index)

---

## Resources

__Cleancalc video series__:
0. [Setting up](https://www.youtube.com/watch?v=KUWsuwSHsAc&index=5&list=UUXoU1BsLZqg7gVoH4_0VGDw)
1. [First step](https://www.youtube.com/watch?v=e382FjIe6QQ&index=6&list=UUXoU1BsLZqg7gVoH4_0VGDw)
2. [Second step](https://www.youtube.com/watch?v=q6-ivciutKk&index=7&list=UUXoU1BsLZqg7gVoH4_0VGDw)
3. [Last step](https://www.youtube.com/watch?v=ragmWxRkLkA&index=8&list=UUXoU1BsLZqg7gVoH4_0VGDw)
* [Code to study](https://github.com/elewa-academy/Fundamentals/tree/master/docs_src/3-cleancalc/cleancalc-series) 

__Separation of Concerns__:
* [Outstanding video](https://www.youtube.com/watch?v=WDNvqxZBI_U)
* [DevIQ article](http://deviq.com/separation-of-concerns/)
* [Stackexchange Question](https://softwareengineering.stackexchange.com/questions/32581/how-do-you-explain-separation-of-concerns-to-others)

__JavaScript Objects__:
* [Progressive code samples](https://github.com/elewa-academy/General-Resources/tree/master/docs_src/local-resources/using-js/objects)

__Programming Paradigms__:
* [Procedural Programming](https://github.com/elewa-academy/General-Resources/blob/master/docs_src/local-resources/programming-and-paradigms/01-procedural-programming.md)
* [Basic OOP in Js](https://github.com/elewa-academy/General-Resources/blob/master/docs_src/local-resources/programming-and-paradigms/02-oop-single-objects.md)
* [From procedural to OOP](https://www.youtube.com/watch?v=rlLuL3jYLvA).  An outstanding video that takes you from procedural to oop programming.

__DOM__:
* [FreeCodeCamp exercises](https://www.freecodecamp.org/map-aside)


[TOP](#index)

---

Closing Thoughts:  
    ![](http://deviq.com/wp-content/uploads/2014/11/Separation-of-Concerns-Feb-2013.png)




___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

