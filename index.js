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
