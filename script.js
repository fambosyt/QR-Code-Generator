let qrcode;

function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const qrContainer = document.getElementById("qrcode");
  const downloadLink = document.getElementById("downloadLink");

  if (!qrText) return alert("Bitte gib einen Text oder eine URL ein!");

  qrContainer.innerHTML = ""; // Reset

  qrcode = new QRCode(qrContainer, {
    text: qrText,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
    if (img) {
      const dataURL = img.src || img.toDataURL("image/png");
      downloadLink.href = dataURL;
    }
  }, 500);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
