//variables
const menuBtn = document.querySelector('.nav-toggle');
const linksContainer = document.getElementById('linksContainer');
const year = document.getElementById('date');

//setting current year in footer
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
year.innerText=currentYear;


menuBtn.addEventListener('click', function(){
    linksContainer.classList.toggle('active');

    // Check if the links container is now active
    const isActive = linksContainer.classList.contains('active');

    // Set the max-height property based on the active state
    linksContainer.style.maxHeight = isActive ? linksContainer.scrollHeight + 'px' : '0';
});

window.addEventListener('scroll', function() {
    // Get the button element
    const topLink = document.querySelector('.top-link');
  
    // Calculate the scroll position and the height of the viewport
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    const navHeader = document.querySelector('.nav-header');

    if (scrollPosition > 100) {
        navHeader.classList.add('scroll');
    } else {
        navHeader.classList.remove('scroll');
    }
    // Get the height of the document including the scrollable area
    let documentHeight = document.documentElement.scrollHeight;
  
    // Calculate the distance between the bottom of the document and the current scroll position
    let distanceToBottom = documentHeight - (scrollPosition + windowHeight);
  
    // If the distance to the bottom is less than or equal to 100px, add the 'show' class to the button, otherwise remove it
    if (distanceToBottom <= 100) {
      topLink.classList.add('show');
    } else {
      topLink.classList.remove('show');
    }
  });
function initialize() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
            const navbarHeight = document.querySelector('.nav-header').offsetHeight; // Get the height of the navbar
            const targetOffset = target.offsetTop - navbarHeight; // Adjusted offset with 10 pixels above the target element
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }
        
        // Hide the links container after clicking on a link (for mobile view)
        linksContainer.classList.remove('active');
        linksContainer.style.maxHeight = '0';
      });
    });
  }
  initialize();