// Darl theme:

const wrapper = document.getElementsByTagName("body");
const darkStitches = document.getElementsByClassName(".blck");

wrapper[0].addEventListener("click", darkTheme);

function darkTheme(event) {
  if (event.type == "click") {
    wrapper[0].classList.toggle("darkTheme");
  }
}

darkTheme();
