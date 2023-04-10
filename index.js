function createRain() {
  const rainContainer = document.querySelector(".rain-container");
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  const startLeft = Math.random() * window.innerWidth;
  const endLeft = startLeft + 10;
  const duration = Math.random() * 4 + 1;

  raindrop.style.left = `${startLeft}px`;
  raindrop.style.animationDuration = `${duration}s`;

  setTimeout(() => {
    rainContainer.removeChild(raindrop);
  }, duration * 1000);

  rainContainer.appendChild(raindrop);
}
