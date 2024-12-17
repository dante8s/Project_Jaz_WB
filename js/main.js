// Initialize the slide index
let slideIndex = 1;
showSlides(slideIndex);

// Function to change to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop back to the first slide if n exceeds the number of slides
  if (n > slides.length) {slideIndex = 1}
  
  // Loop to the last slide if n is less than 1
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add the "active" class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Function to toggle the class for an element
function myFunction(x){
  x.classList.toggle("change");
}

// Add event listener for the navigation button
document.querySelector(".nav-button").addEventListener("click", function() {
  document.querySelector(".nav-items").classList.toggle("hide-show");
});

// Function to copy email to clipboard
function copyEmailToClipboard() {
  const email = 'example@example.com';
  navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard: ' + email);
  }).catch(err => {
      console.error('Could not copy: ', err);
  });
}

// Function to copy phone number to clipboard
function copyPhoneToClipboard() {
  const phone = '+1234567890';
  navigator.clipboard.writeText(phone).then(() => {
      alert('Phone number copied to clipboard: ' + phone);
  }).catch(err => {
      console.error('Could not copy: ', err);
  });
}



