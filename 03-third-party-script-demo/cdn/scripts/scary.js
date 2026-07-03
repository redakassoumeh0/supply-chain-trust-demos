const warning = document.createElement("div");

warning.innerText = "This page was changed by code you do not control.";
warning.style.position = "fixed";
warning.style.top = "0";
warning.style.left = "0";
warning.style.right = "0";
warning.style.padding = "20px";
warning.style.background = "black";
warning.style.color = "white";
warning.style.fontSize = "24px";
warning.style.zIndex = "9999";
warning.style.textAlign = "center";
warning.style.fontFamily = "system-ui";

document.body.appendChild(warning);

const title = document.querySelector("h1");
if (title) {
  title.innerText = "Injected by a third-party script";
}
