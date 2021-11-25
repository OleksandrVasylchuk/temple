(() => {
  const refs = {
    openMenyBtn: document.querySelector("[data-menu-open]"),
    closeMenyBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenyBtn.addEventListener("click", toggleMeny);
  refs.closeMenyBtn.addEventListener("click", toggleMeny);

  function toggleMeny() {
    document.body.classList.toggle("menu-open");
    refs.menu.classList.toggle("is-hidden");
  }
})();

var slideshow = new TINY.slider.slide("slideshow", {
  id: "slider",
  auto: 4,
  resume: false,
  vertical: false,
  navid: "pagination",
  activeclass: "current",
  position: 0,
  rewind: false,
  elastic: true,
  left: "slideleft",
  right: "slideright",
});
