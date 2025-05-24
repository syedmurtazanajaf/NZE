function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}



// navbar end


const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    function nextSlide() {
      index++;
      if (index >= slides.length) index = 0;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // carousel end


    // product file start

    gsap.registerPlugin(ScrollTrigger);

    // Har card-container ke liye alag trigger
    document.querySelectorAll(".card-container").forEach((container) => {
      gsap.from(container.querySelectorAll(".image-card"), {
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // jab container viewport ke 80% height par aata hai
          toggleActions: "play none none none", // sirf ek baar play kare
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    });
    
    // product end

    // service pages start

    gsap.registerPlugin(ScrollTrigger);

gsap.from(".services-container", {
  scrollTrigger: {
    trigger: ".services-container",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  x: 100,          // 100px right se aayega
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});



    