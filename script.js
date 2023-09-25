const switchBtn = document.getElementById("switch-id");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

function toggleSwitch() {
  if (this.checked) {
    basic.innerHTML = "&dollar;19.99";
    professional.innerHTML = "&dollar;24.99";
    master.innerHTML = "&dollar;39.99";
  } else {
    basic.innerHTML = "&dollar;199.99";
    professional.innerHTML = "&dollar;249.99";
    master.innerHTML = "&dollar;399.99";
  }
}

switchBtn.addEventListener("click", toggleSwitch);
