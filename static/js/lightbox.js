console.log('Lightbox initiated!');
const selected_class = 'lightbox-loaded';
window.addEventListener('load', function() {
  // Select all the windowboxable images
  const lightboxed_elements = document.querySelectorAll('.lightbox img');
  lightboxed_elements.forEach(function(element) {
    // Add title attribute to give user idea they can click
    element.title = "Click to expand";
    element.addEventListener('click', function(){
      const is_selected = this.classList.contains(selected_class);
      if(is_selected){
        this.classList.remove(selected_class);
        element.title = "Click to expand";
      } else {
        this.classList.add(selected_class);
        element.title = "Click to exit";
      }
    });
  });
});