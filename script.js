const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", () => {
  const body = document.body;
  switch (themeSelect.value) {
    case "grayblack":
      body.style.background = "linear-gradient(135deg, #2e2e2e, #0b0b0b)";
      break;
    case "bluepurple":
      body.style.background = "linear-gradient(135deg, #1e3c72, #2a0845)";
      break;
    case "greenblack":
      body.style.background = "linear-gradient(135deg, #0f9b0f, #000000)";
      break;
    case "sunset":
      body.style.background = "linear-gradient(135deg, #ff7e5f, #feb47b)";
      break;
  }
});
