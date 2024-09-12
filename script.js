function scrollImage()
{
    document.addEventListener('DOMContentLoaded', () => {
        const wrapper = document.querySelector('.scroll-wrapper');
        const imageWrappers = Array.from(wrapper.children);
    
        // Clone image wrappers and append them for seamless scrolling
        const cloneWrappers = imageWrappers.map(wrapper => wrapper.cloneNode(true));
        wrapper.append(...cloneWrappers);
      
      
        // Dynamically adjust the animation duration based on the total width
        const updateAnimationDuration = () => {
          const totalWidth = wrapper.scrollWidth / 200; // Total width of images
          const containerWidth = document.querySelector('.scroll-container').offsetWidth;
          const duration = (totalWidth / containerWidth) *1000; // Adjust time as needed
          wrapper.style.animationDuration = `${duration}s`;
        };
      
      
        window.addEventListener('resize', updateAnimationDuration);
        updateAnimationDuration(); // Initial call to set duration
      });
}
function inspectDisable(){
    document.addEventListener('contextmenu', function(event)
{
    event.preventDefault();
})
}
scrollImage();
inspectDisable();
