let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Invalid";
  }
}
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

function calculate() {
  try {
    let result = eval(display.value);
    display.style.transform = "scale(1.1)";
    setTimeout(() => {
      display.style.transform = "scale(1)";
      display.value = result;
    }, 150);
  } catch {
    display.value = "Error";
  }
}