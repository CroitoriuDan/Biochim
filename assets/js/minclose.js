var minimize = false;

function windowClose() {
  var e = document.getElementById("wrapper");
  e.style.display = "none";
}

function windowMin() {
  var e = document.getElementById("popup-wrapper");
  if (minimize === false) {
    // minimize (hide)
    // e.style.display = "none";
    addClass(e, "wrapper-min");
    minimize = true;
  } else {
    // show
    // e.style.display = "block";
    removeClass(e, "wrapper-min");
    minimize = false;
  }
}