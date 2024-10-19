const codes = document.querySelectorAll(".code");

console.log(codes);

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[i].value = "";
      setTimeout(() => codes[i + 1].focus());
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[i - 1].focus());
    }
  });
});
