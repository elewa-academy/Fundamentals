# Portfolio Face Lift Pt. 1: State & Components




### Index
* [Learning Objectives](#learning-objectives)
* [Requirements](#requirements)
* [Resources](#resources)

---


## Learning Objectives

* UI Components
* App = Data + User Interactions
* State = Truth
* CRUD
* DOM Manipulations
* jQuery

### UI Components

Components are "chunks" of your website that are structurally the same, but with different information connected to them. Your project boxes are a perfect example: they have identical html/css configuration but a different title, image, and hyperlinks.

We will take this concept to the next level by writing a jQuery method that takes a repo name & image url as arguments and appends a new project component to the end of a "projects" div.

### App = Data + User Interactions

Here's a good working definition for "application":
> Code that defines & enables user interactions with stored data. 

Pretty straight forward after all!  

### State = Truth

Your new portfolio will have _state_.  This is either an object or an array that keeps track of what is currently displayed on your portfolio (ie. the repo name & image url for each featured project).  

The state should be the final source of truth in your application. There should never be a mismatch between what's displayed on the screen and what's stored in your portfolio's _state_.  

### Create, Read, Update, Delete

These are the elementary operations for accessing and using data.  Your portfolio will allow a user to:
  * Create new featured projects
  * View all featured projects
  * Update the image for a featured project
  * Delete a featured project from the DOM

[TOP](#index)

---

## Requirements

1. Learn some jQuery with freecodecamp's exercises and w3schools as a reference
2. Refactor 2-3 of your Organizing Development projects to have a little more interactivity
  * do it on a new branch of that repo
  * update the readme
  * update the gh-pages demo
3. Plan and develop a new portfolio for your home page
    * on a new branch
    * the whole Organized Development thing
    * a user can ...
      * (this list is required, but feel free to add to it)
      * see a pre-selected list of projects on window load
      * change the image for any given project box
      * change the color theme on any given project box
      * add new components to the portfolio via an input
        * repo name
        * image
      * remove components from the portfolio
      * change the image for an existing project
    * technical specs:
      * in the source cod
        * an (object or array) containing info for each project you want displayed on load ("state"):
          * (will always be same on load)
          * (will change as a user interacts with the site) 
          * repo name
          * image url 
        * a method that uses jquery to append a single component into a pre-defined div
        * a method to iterate through the state and draw a component for each

Challenge:
  * A User Can ..
    * View a complete list of your repositories
    * Click on a listed repo to build a 



[TOP](#index)

---


## Resources

The DOM:
* [W3 Schools](https://www.w3schools.com/js/js_htmldom.asp)

jQuery:
* [W3 Schools](https://www.w3schools.com/jquery/default.asp)
* [FreeCodeCamp](https://www.freecodecamp.org/challenges/learn-how-script-tags-and-document-ready-work)
* From jQuery:
  * [Learn jQuery](https://learn.jquery.com)
  * [The Docs](http://api.jquery.com)

code to study
  tictactoe


GitHub API Challenge:
* [Tutorial & Example](http://blog.teamtreehouse.com/code-a-simple-github-api-webapp-using-jquery-ajax)
* [Short Tutorial](http://yonaba.github.io/2012/08/14/List-your-GitHub-projects-using-JavaScript-and-jQuery.md.html)
* [Another Example](https://codepen.io/bvasko/pen/gJxKk)
* [Make it Prettier ](https://nihal111.github.io/2017/07/05/github-jquery.html)


[TOP](#index)
___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

