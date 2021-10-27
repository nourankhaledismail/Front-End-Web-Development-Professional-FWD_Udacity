/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

/* This button user can use it to add more sections */
const btn = document.getElementById("btn");
const nBar = document.getElementById('navbar__list');
/* create document fragment to improve the performance */
const docFrag = document.createDocumentFragment();
/* it begins from 5 as there's already 4 sections added automatically when we open the site */
let sec_id = 5;
/* This button if the user wants to scroll to the top */
const topBtn = document.getElementById('top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/* function to add sections into navigation bar */
function sectionToNavBar() {
    const allSections = document.querySelectorAll('section');
    allSections.forEach(function(section) {
        /* to prevent adding all elements again in nBar when adding new section */
        nBar.innerHTML='';  
        /* create element to add li to each ul */
        const elementLi = document.createElement('li');
        /* this method to add section to nav bar we get the 'data-nav' 
        then we add class:'menu__link' to add the section name in style same as in the style.css file */
        const dataNavSection = document.createElement('nav');
        dataNavSection.textContent = section.getAttribute('data-nav');
        dataNavSection.setAttribute('class','menu__link');
        /* we add li to each ul */
        elementLi.appendChild(dataNavSection);
        /* each click on each section in the navBar we add event listener with smooth scroll */
        elementLi.addEventListener('click',function(ev){
            ev.preventDefault();
            /* block property defines the vertical alignment so it's start to scroll until the start of each section */
            section.scrollIntoView({behavior: "smooth",block:'start', inline: "nearest"});
        });
        /* we add each element in elementLi in docFrag during this loop */
        docFrag.appendChild(elementLi);
    });
    /* after we finished this loop and before exit the function we added all the elements in docFrag to the nBar */
    /* this step is improve the performance of the site */
    nBar.appendChild(docFrag);
}

/* function to add extra Sections if the user needs to add more than 4 sections */
function addSection(){
    const sec =  `<section id="section${sec_id}" data-nav= "Section ${sec_id}" class="your-active-class">
    <div class="landing__container">
      <h2>Section ${sec_id}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`
  /* increment this variable after adding any section */
  sec_id += 1;
  /* adding this section in the main then we use insertAdjacentHTML to add this new sections in the end */
  document.querySelector('main').insertAdjacentHTML('beforeend',sec);
} 

// build the nav
sectionToNavBar(document.querySelectorAll('section'));

/* this condition checks if we click on the button then it will add more sections */
if(btn){
    btn.addEventListener('click',function(ev){
        ev.preventDefault();
        addSection();
        sectionToNavBar();
    });
}

/* Add class 'active' to section when near top of viewport */
/* function to add an active state during scrolling */
function viewActiveState(){
    const allSections = document.querySelectorAll('section');
    allSections.forEach(function(section){
        const elemLocation = section.getBoundingClientRect();
        /* This condition to check the dimensions of every section it's top and bottom */
        if (elemLocation.top <=100 && elemLocation.bottom >=100)
            {
                /* check if the classlist doesn't contain "your-active-class" if it doesn't find it then adds it */
                if(!section.classList.contains("your-active-class"))
                {
                    section.classList.add("your-active-class");
                }
            }
            else{
                /* check if the classlist contains "your-active-class" if it finds it then removes it */
                if(section.classList.contains("your-active-class"))
                {
                    section.classList.remove("your-active-class");
                }
            }
        
    });
}

/* add event listener to use the viewActiveState during Scrolling and hiding the navBar while scrolling */
document.addEventListener('scroll',function(ev){
    ev.preventDefault();
    viewActiveState();
    let scrolling ;
    document.querySelector('header').style.display = 'none';
    clearTimeout(scrolling);
    scrolling = setTimeout(function setTime(){
            document.querySelector('header').style.display = 'block', 1000;
        });
    /* if the user scroll down the top by 200 pixel then 
    the Scroll Top button will appear if the user wants to click on it to return to the top faster*/
    document.scrollingElement.scrollTop > 100 ? topBtn.style.display = 'block' : topBtn.style.display = 'none';
});

// Scroll to anchor ID using scrollTO event
topBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    window.scroll({top:0, behavior:'smooth'});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


