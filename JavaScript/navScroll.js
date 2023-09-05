const openButton = document.querySelector(".open-button");

function openNavigationBar() {
      document.getElementById("side-navbar").style.width = "250px";
}

openButton.addEventListener("click", function () {
      openNavigationBar();
});

const closeButton = document.querySelector(".close-button");

function closeNavigationBar() {
      document.getElementById("side-navbar").style.width = "0";
}

closeButton.addEventListener("click", function () {
      closeNavigationBar();
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header-container").style.padding = "0px";
      } else {
            document.getElementById("header-container").style.padding = "20px";
      }
}