const routeButtons = [...document.querySelectorAll('[data-route]')];
const destination = document.getElementById('destination');
const connector = document.getElementById('connector');
const routeSummary = document.getElementById('route-summary');

for (const button of routeButtons) {
  button.addEventListener('click', () => {
    const usesDetour = button.dataset.route === 'detour';
    for (const option of routeButtons) {
      option.setAttribute('aria-pressed', String(option === button));
    }

    destination.textContent = usesDetour ? 'microwave_02' : 'microwave_03';
    connector.hidden = !usesDetour;
    routeSummary.textContent = usesDetour
      ? 'Detour. One connector action returns to the start of the verified seven-action continuation.'
      : 'Direct route. The first action reaches the start of the verified seven-action continuation.';
  });
}
