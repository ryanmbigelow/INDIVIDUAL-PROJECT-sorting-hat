# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and create issue tickets and a project board for your project
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)

## MY README
                                                        The Magic Sorting Hat

Overview: The Magic Sorting Hat allows a user to randomly sort any amount of students into one of four Harry Potter houses. A user can filter students by house and remove a student from "Hogwarts" altogether, banishing them to "Voldemort's army".

Prototype: N/A

Data flowchart: https://docs.google.com/presentation/d/1o1HsmMU1CDAJcDzbOMRRE5w6Rz4JAOuDlsNyFUJyV8g/edit#slide=id.g1718aa16489_0_81

Deployed project: https://mellifluous-raindrop-b967b2.netlify.app/

Project board: https://github.com/ryanmbigelow/INDIVIDUAL-PROJECT-sorting-hat/issues

The user and the problem: The user needs to randomly sort people. This functionality could be great for a teacher who needs to randomly assign students into groups or teams. It would work well at work to randomly assign tasks (e.g. Slyhterins take out the trash, Gryffindors clean the kitchen, etc.). The problem is that you don't want there to be any bias when sorting into teams. The randomizer eliminates the bias and mixes up which individuals are set to work together.

List of features:
- Click "Discover your house" button to unveils a form
- Input a name into the form and select "Sort"
- Sort button generates an object
- Each new object generates a random house: Gryffindor, Slytherin, Ravenclaw, Hufflepuff
- New student object displays with a color-coded banner in the "Students" section on the left-hand side
- On the right hand side the banished students are displayed in "Voldemort's Army"
- Select a filter button to display only Gryffindors, Slytherins, Ravenclaws, Hufflepuffs, or all students
- Select "Expel" to move a student to Voldemort's army

Contributors: https://github.com/ryanmbigelow
