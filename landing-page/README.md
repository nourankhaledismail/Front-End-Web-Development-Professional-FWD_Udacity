# Landing Page:
HTML, CSS Code are provided by Udacity.
# PROJECT DESCRIPTION:
This project requires building a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page. This project uses HTML, CSS, JavaScript.

# CONTENTS OF THE PROJECT:
1- when you open the page there are already 4 sections in it added from html. 

2- created "addSection" function using js to add more sections automatically.

3- made "Add Section" button that connected with the "addSection" function through addEventListener, once you click on it there's a new section has been added.

4- created "sectionToNavBar" function that created a link and added each section into navBar.

5- if you clicked on the "Add Section" button, you would find a new section added to the page and in the navBar.

5- Smooth scrolling using scrollIntoView.

6- Also, I defined a variable "docFrag", that was assigned to createDocumentFragment to improve the performance during adding each section in the navBar.

7- created "viewActiveState" function it's for highlighting each section during scrolling or when we clicked on it from the navBar, I used "getBoundingClientRect".

8- Also, there's the condition before adding "your-active-class" and before removing it.

9- Made the navBar disappear during the scrolling after 1 second and reappear once you stopped scrolling.

10- Made "Scroll To Top" button, to help the user to get to the top easily. This button isn't visible once you open the page but when you scrolled down after 100 pixels it will appear.
