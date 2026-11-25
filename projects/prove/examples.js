const caseControls = document.querySelector('.case-controls');
const caseButtons = [...caseControls.querySelectorAll('button')];
const casePanels = caseButtons.map(button => document.getElementById(button.getAttribute('aria-controls')));

function showCase(activeButton) {
  for (const [index, button] of caseButtons.entries()) {
    const selected = button === activeButton;
    button.setAttribute('aria-pressed', String(selected));
    casePanels[index].hidden = !selected;
  }
}

for (const button of caseButtons) {
  button.addEventListener('click', () => showCase(button));
}

showCase(caseButtons[0]);
caseControls.hidden = false;
