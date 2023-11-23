 // JavaScript for adding scroll effect and smooth scrolling
 const nav = document.getElementById('mainNav');

 window.addEventListener('scroll', () => {
     if (window.scrollY > 0) {
         nav.classList.add('scrolled');
     } else {
         nav.classList.remove('scrolled');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();

         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelectorAll('a[href^="#"]').forEach(otherAnchor => {
             otherAnchor.classList.remove('active');
         });
         this.classList.add('active');
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 //<!--document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 //anchor.addEventListener('click', function(e) {
 //e.preventDefault();
 //const targetId = this.getAttribute('href');

 // document.querySelectorAll('a[href^="#"]').forEach(otherAnchor => {
 // otherAnchor.classList.remove('active');
 //});
 //