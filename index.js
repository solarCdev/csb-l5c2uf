const observer = new IntersectionObserver((e) => {
  e.forEach((박스) => {
    if (박스.isIntersecting) {
      박스.target.style.opacity = 1;
    } else {
      박스.target.style.opacity = 0;
    }
  });
});

const ele = document.querySelectorAll(".blue");

ele.forEach((e) => {
  observer.observe(e);
});
