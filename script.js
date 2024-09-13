function scrollImage()
{
    document.addEventListener('DOMContentLoaded', () => {
        const wrapper = document.querySelector('div[data-page="scroll-wrapper"]');
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
let isRunning =true;
function scrollImage2()
{
  if(isRunning = true) {

  
    document.addEventListener('DOMContentLoaded', () => {
        const wrapper1 = document.querySelector('.scrolldiv');
        const imageWrappers1 = Array.from(wrapper1.children);
    
        // Clone image wrappers and append them for seamless scrolling
        const cloneWrappers1 = imageWrappers1.map(wrapper1 => wrapper1.cloneNode(true));
        wrapper1.append(...cloneWrappers1);
      
      
        // Dynamically adjust the animation duration based on the total width
        const updateAnimationDuration = () => {
          const totalWidth1 = wrapper1.scrollWidth / 3; // Total width of images
          const containerWidth1 = document.querySelector('.scrollpg4').offsetWidth;
          const duration = (totalWidth1 / containerWidth1) *100; // Adjust time as needed
          wrapper1.style.animationDuration = `${duration}s`;
        };
      
      
        window.addEventListener('resize', updateAnimationDuration);
        updateAnimationDuration(); // Initial call to set duration
      });
      setTimeout(scrollImage2,1000);
}
}
function inspectDisable(){
  document.addEventListener('contextmenu', function(event)
{
  event.preventDefault();
})
}

const hoverMe = document.querySelector(".scrolldiv");
function scrollImage2Resume(){
 hoverMe.addEventListener("mouseenter", () => {
  isRunning = false;
  scrollImage2();
  console.log("helloas")
 }) ;
}
hoverMe.addEventListener("mouseleave", () => {
  if (!isRunning){
    isRunning =true;
    scrollImage2();
  }
 }) ; 



inspectDisable();
scrollImage2();
scrollImage();
scrollImage2Resume();
scrollImage2Pause();