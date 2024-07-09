var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
   // Use a different variable name inside the loop to avoid conflicts
   for(let tablink of tablinks){
      tablink.classList.remove("active-link");
   }
   for(let tabcontent of tabcontents){
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


// SLIDE SHOW
const slides = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slides, index) {
   slides.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
   counter++;
   carousel();
});
prevBtn.addEventListener("click", function () {
   counter--;
   carousel();
});

function carousel() {

   

   if (counter < slides.length -1) {
      nextBtn.style.display = "block";
   } else {
      nextBtn.style.display = "none";
   }
   if (counter > 0) {
      prevBtn.style.display = "block";
   } else {
      prevBtn.style.display = "none";
   }


   slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
   });
}
prevBtn.style.display = "none";






// google translator

function googleTranslateElementInit(){
   new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
   );
}



