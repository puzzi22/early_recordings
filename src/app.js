myFunction("france-selector", "french");
myFunction("germany-selector", "german");
myFunction("spain-selector", "spanish");
myFunction("us-selector", "american");
myFunction("uk-selector", "english");
myFunction("other-selector", "other");

function myFunction(selector, nationality) {
  const countrySelector = Array.from(document.getElementsByClassName(selector));
  countrySelector.forEach((selector2) => {
    selector2.addEventListener("click", function handleClick(event) {
      resetSelectorColor();

      const hornists = Array.from(document.getElementsByClassName("hornist"));
      hornists.forEach((hornist) => {
        if (hornist.className.indexOf(nationality) < 0) {
          hornist.setAttribute("style", "display: none;");
        } else {
          hornist.setAttribute("style", "display: list-item;");
          selector2.setAttribute("style", "background: var(--primary-color2);");
        }
      });
    });
  });
}

function resetSelectorColor() {
  const countrySelector = Array.from(document.getElementsByClassName("item"));
  countrySelector.forEach((item) => {
    item.setAttribute("style", "background: var(--primary-color);");
  });
}

function myFunction2() {
  console.log("I'm in!")
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}