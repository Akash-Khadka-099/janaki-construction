const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      console.log("entry");
      // Add the animation class
      entry.target.classList.add("entrance-effect");
    }
  });
});

const viewbox = document.querySelectorAll(".entry-animation");
viewbox.forEach((content) => {
  observer.observe(content);
});
