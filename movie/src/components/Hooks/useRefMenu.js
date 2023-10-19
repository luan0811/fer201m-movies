export default function useRefMenu() {
  // JAVASCRIPT NAV_BAR_________________________________________________________
  const useRef = navBar();
  function navBar() {
    window.addEventListener("load", function () {
      const toggle = this.document.querySelector(".menu-toggle");
      const menu = this.document.querySelector(".menu");
      toggle && toggle.addEventListener("click", handleToggleMenu);
      function handleToggleMenu(e) {
        menu && menu.classList.add("is-active");
      }
      document.addEventListener("click", handleClickOutside);
      function handleClickOutside(e) {
        if (
          e.target.matches(".menu-toggle") ||
          e.target.matches(".menu, .menu *")
        )
          return;
        menu && menu.classList.remove("is-active");
      }
    });
  }
  // _____________________________________________________________________________
  return useRef;
}
