const burgerButton = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

let flag = true;
burgerButton.addEventListener("click", () => {
  if (flag) {
    sidebar.style.visibility = "hidden";
    flag = false;
  } else {
    sidebar.style.visibility = "visible";
    flag = true;
  }
});
