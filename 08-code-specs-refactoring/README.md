# Code Specs & Refactoring

With this project you won't be building anything new.  Instead you'll be studying and replicating a project we already wrote.  There are two main reasons for doing this:
1. _Learning to effectively read source code, and to understand it at a high level_.  
  This skill is necessary for reading documentation, collaborating, testing, learning new libraries, debugging, ... basically everything.  Without this skill you will always be struggling uphill.
2. _To understand the practical relationship between implementation and behavior_.  
  Each time you study and replicate a step in our code, your implementation will not be identical to ours.  You might use different DOM accessors or structure your control flow differently.  But no matter how you implement your functions, your application will have the same behavior and specifications as ours.  This is called __refactoring__.

Take your time on this project, the better you understand these two points the easier the next project will be.


### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)
* [Extra Practice](#extra-practice)

---

## Learning Objectives

* Application = User Interactions + Data.  
  * "Code" isn't anywhere in that definition.
* An application is it's behavior, not it's implementation
* Using specs to study and replicate an application
* Refactoring: Changing the source without breaking the behavior


[TOP](#index)

---

## Specifications

0. Fork+clone [this repository](https://github.com/elewa-academy/studying-with-specs/tree/master) and clear the README so you can use it for notes. 
1. Follow the instructions in the README on our account (since you cleared it on your clone).  We recommend filling out all of the files in place on your cloned copy.  You must reuse our HTML (exactly as it is, no changes allowed). You will be rewriting the JS file for each folder. Once you have replicated each version you can move on to the next step: improving the application's architecture.
2. The code provided does not have proper separation of concerns like you learned about in CleanCalc (UI/logic separation).  Refactor TicTacToe6 into the 3-layered handler/logic architecture you learned in cleancalc. 
3. Add some logic to see who won.
4. Create an empty repository on your account and build it into full repo with 8+ version releases (7 for the versions provided, and 1+ for your refactor into logic/handler architecture). Be sure to have a full & polished repository with documentation, tests, and a live demo.  The simplest way to do this will be to create a new directory on your computer, and for each version in TicTacToe:
  1. Copy paste everything for that version (original code, specs, your code, html, ..) into the new repository.
  2. Add, commit, tag. Push to your repository
  3. Delete everything, and repeat.
5. Finishing touches: Add some tests for the logic, put a live demo, link the code & demo to your portfolio, fill out the readme, ... Make it complete and pretty.

[TOP](#index)

---

## Resources

[Template Repository](https://github.com/elewa-academy/studying-with-specs/tree/master)

Tictactoe Videos:
* [Part 1](https://www.youtube.com/watch?v=cElzTD_x1xw)
* [Part 2](https://www.youtube.com/watch?v=U-4T7y_Hho4)
* [Part 3](https://www.youtube.com/watch?v=rlWXR9-4Mo4)
* [Part 4](https://www.youtube.com/watch?v=2mrhvwVi5iY)
* [Part 5](https://www.youtube.com/watch?v=sX59uU9l0cs)
* [Part 6](https://www.youtube.com/watch?v=yN52jB3XOBQ)
* [winner.js](https://github.com/elewa-academy/Fundamentals/blob/master/07-code-specs-refactoring/winner.js)

Demo Repositories:
* (Not exactly the same project, but good examples of clean repos)
* [TicTacToe Repo](https://github.com/elewa-student/tic-tac-toe/tree/master)
* [CleanCalc Repo](https://github.com/radovandelic/cleancalc)

Interacting with Code:
* [Writing Clean Code](https://github.com/elewa-academy/General-Resources/blob/master/programming-resources/clean-code.md)
* [What is an App?](https://www.gcflearnfree.org/computerbasics/understanding-applications/1/)
* [What is Refactoring?](https://stackoverflow.com/questions/1025844/what-is-refactoring-and-what-is-only-modifying-code). This answer connects refactoring to testing.  We'll explore this relationship in the next series of projects.
* [Navigating Codebase](https://github.com/elewa-academy/General-Resources/blob/master/programming-resources/navigating-codebase.md)
* [When Understanding Means Rewriting](https://blog.codinghorror.com/when-understanding-means-rewriting/)
* [Novice & Experts Reading Code](https://simpleprogrammer.com/what-makes-code-readable-not-what-you-think/)
* [Reverse Engineering](http://blog.teamtreehouse.com/the-secret-to-learning-code)



[TOP](#index)

---

## Extra Practice

Explore the projects on [microjs.com](http://microjs.com/#).  Open the ones that interest you and try to replicate them using the method from this project.


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

