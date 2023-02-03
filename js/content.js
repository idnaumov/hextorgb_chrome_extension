const hexInput = document.querySelector("#hex-input");
const rgbOutput = document.querySelector("#rgb-output");
const copyButton = document.querySelector("#copy-button");

hexInput.addEventListener("input", function() {
    let hex = hexInput.value;
    if (hex[0] === "#") {
      hex = hex.slice(1);
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    if ( r ) {
        rgbOutput.value = `rgba(${r}, ${g}, ${b}, 1)`;
    } else {
        rgbOutput.value = `Invalid argument`;
    }
  });

copyButton.addEventListener("click", function() {
  navigator.clipboard.writeText(rgbOutput.value);
});