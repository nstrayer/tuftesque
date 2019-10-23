console.log('Lightbox initiated!');
const selected_class = 'lightbox-loaded';
window.addEventListener('load', function() {
  // Select all the windowboxable images
  const lightboxed_elements = document.querySelectorAll('.lightbox img');
  lightboxed_elements.forEach(function(element) {
    element.addEventListener('click', function(){
      const is_selected = this.classList.contains(selected_class);
      if(is_selected){
        this.classList.remove(selected_class);
      } else {
        this.classList.add(selected_class);
      }
    });
  });
});