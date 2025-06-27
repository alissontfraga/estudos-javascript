document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  let intervalId = null;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("slideActive");
      if (i === index) slide.classList.add("slideActive");
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  const startAutoSlide = () => {
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalId);
    startAutoSlide();
  };

  startAutoSlide();

  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
});
