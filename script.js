const revealed = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealed.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 60, 420)}ms`;
  observer.observe(element);
});
