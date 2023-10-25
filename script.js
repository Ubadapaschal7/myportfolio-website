var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
   for(tablink of tablinks){
      tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}







var sidemenu = document.getElementById("sidemenu");

function openmenu(){
 sidemenu.style.right = "0";
}
function closemenu(){
 sidemenu.style.right = "-200px";
}


















function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateBorder() {
    const subTitle = document.querySelector('.sub-title');
  
    if (isInViewport(subTitle)) {
      subTitle.style.borderBottom = '2px solid rgb(255, 254, 254)';
      setTimeout(() => {
        subTitle.style.borderBottom = '2px solid transparent'; // Reset to transparent
      }, 500); // Adjust the delay (in milliseconds) as needed
    }
  }
  
  // Attach the scroll event listener to trigger the animation
  window.addEventListener('scroll', animateBorder);