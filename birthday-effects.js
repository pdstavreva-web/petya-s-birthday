document.addEventListener("DOMContentLoaded", () => {
  const effects = document.createElement("div");
  effects.setAttribute("aria-hidden", "true");
  effects.innerHTML = `
    <div class="skyline-plane">✈️</div>
    <div class="skyline-plane plane-two">🛩️</div>
    <div class="skyline-plane plane-three">✈️</div>
    <div class="birthday-spark spark-one"></div>
    <div class="birthday-spark spark-two"></div>
    <div class="birthday-spark spark-three"></div>
    <div class="birthday-spark spark-four"></div>
  `;
  document.body.appendChild(effects);
});