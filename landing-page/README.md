This Project is using HTML,CSS and javaScript.
HTML and CSS are provided by Udacity, but i did some changes.

PROJECT DESCRIPTION:
This project requires to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

CONTENTS OF THE PROJECT:
1- when you open the page there's already 4 sections in it adding from html.
2- created "addSection" function using js to add more section automatically.
3- made "Add Section" button that connected with the "addSection" function through addEventListener, 
once you click on it there's a new section have been added.
4- created "sectionToNavBar" function that created a link and added each section into navBar.
5- if you clicked on the "Add Section" button, you would find new section added in the page and in the navBar.
5- Smooth scrolling using scrollIntoView.
6- Also, I defined a variable "docFrag", that assigned to createDocumentFragment to improve the performance during adding each section in the navBar.
7- created "viewActiveState" function it's for highlight each section during scrolling or when we clicked on it from the navBar, I used "getBoundingClientRect".
8- Also, there's condition before adding "your-active-class" and before removing it.
9- Made the navBar disappear during the scrolling after 1 second and reappear once you stopped scrolling.
10- Made "Scroll To Top" button, to help the user to get to the top easily. This button isn't visible once you open the page but when you scrolled down after 100 pixel it will appear.
