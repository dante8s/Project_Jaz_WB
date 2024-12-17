// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'accordion-header'
  const headers = document.querySelectorAll('.accordion-header');
  
  // Add a click event listener to each accordion header
  headers.forEach(header => {
    header.addEventListener('click', function() {
      // Get the next sibling element (content) of the clicked header
      const content = this.nextElementSibling;
      
      // Toggle the maxHeight style to show or hide the content
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});

function myFunction(x){
  x.classList.toggle("change")
}
document.querySelector(".nav-button").addEventListener("click", function() {
  document.querySelector(".nav-items").classList.toggle("hide-show")
})


function copyEmailToClipboard() {
const email = 'example@example.com';
navigator.clipboard.writeText(email).then(() => {
    alert('Email copied to clipboard: ' + email);
}).catch(err => {
    console.error('Failed to copy: ', err);
});
}

function copyPhoneToClipboard() {
const phone = '+1234567890';
navigator.clipboard.writeText(phone).then(() => {
    alert('Phone number copied to clipboard: ' + phone);
}).catch(err => {
    console.error('Failed to copy: ', err);
});
}
