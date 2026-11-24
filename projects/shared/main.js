// Adapted from the GeoReader project page's citation and section navigation.
const copyButton = document.getElementById('copy-citation');
const citation = document.querySelector('#citation code');
let copyReset;

copyButton.addEventListener('click', async () => {
  window.clearTimeout(copyReset);
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = 'Copied';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Selected for copying';
  }
  copyReset = window.setTimeout(() => {
    copyButton.textContent = 'Copy BibTeX';
  }, 2500);
});

const links = [...document.querySelectorAll('.contents a')];
const sections = links.map(link => document.getElementById(link.hash.slice(1)));

function setCurrentSection(id) {
  for (const link of links) {
    const isCurrent = link.hash === '#' + id;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];
  if (visible) setCurrentSection(visible.target.id);
}, { rootMargin: '-18% 0px -55% 0px' });

for (const section of sections) observer.observe(section);
