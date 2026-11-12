const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
}
const savedTheme = localStorage.getItem('site-theme');
applyTheme(savedTheme === 'light' ? 'light' : 'dark');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('site-theme', next);
    applyTheme(next);
  });
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
const papers = [...document.querySelectorAll('.publication')];
const filters = [...document.querySelectorAll('[data-filter]')];
const preprints = document.querySelector('.preprints-block');
const yearGroups = [...document.querySelectorAll('.publication-year-group')];
let selected = 'selected';
const search = document.querySelector('#paper-search');
function filterPapers() {
  const query = search ? search.value.trim().toLowerCase() : '';
  let count = 0;
  papers.forEach(paper => {
    const categories = (paper.dataset.categories || '').split(' ');
    const match = (selected === 'all' || (selected === 'selected' ? paper.dataset.selected === 'true' : categories.includes(selected))) && paper.textContent.toLowerCase().includes(query);
    paper.hidden = !match;
    if (match) count++;
  });
  document.querySelector('#paper-count').textContent = `${count} ${count === 1 ? 'paper' : 'papers'}`;
  document.querySelector('#empty-state').hidden = count > 0;
  const preprintCount = papers.filter(paper => paper.dataset.kind === 'preprints' && !paper.hidden).length;
  preprints.hidden = preprintCount === 0;
  document.querySelector('#preprint-count').textContent = `${preprintCount} ${preprintCount === 1 ? 'paper' : 'papers'}`;
  yearGroups.forEach(group => {
    group.hidden = ![...group.querySelectorAll('.publication')].some(paper => !paper.hidden);
  });
}
filters.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter;
  filters.forEach(item => {
    item.classList.toggle('active', item === button);
    item.classList.toggle('btn-primary', item === button);
    item.classList.toggle('btn-outline-primary', item !== button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  const subtitle = document.querySelector('.publication-subtitle');
  if (subtitle) subtitle.textContent = {selected: 'Selected Publications', all: 'All Publications', embodied: 'Embodied AI, Navigation & Robot Learning', multimodal: 'Multimodal Foundation Models & Spatial Reasoning', driving: 'Autonomous Driving', others: 'General Computer Vision & Other Research'}[selected];
  filterPapers();
  requestAnimationFrame(updateNavigation);
}));
if (search) search.addEventListener('input', filterPapers);
filterPapers();
const navLinks = [...navigation.querySelectorAll('a')];
const navSectionIds = new Set(navLinks.map(link => link.hash.slice(1)));
const navSections = [...document.querySelectorAll('main > section')].filter(section => navSectionIds.has(section.id));
let clickedNavId = location.hash && navSectionIds.has(location.hash.slice(1)) ? location.hash.slice(1) : null;

function setActiveNav(active) {
  navLinks.forEach(link => {
    const current = link.hash === `#${active}`;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  if (navSectionIds.has(id)) {
    clickedNavId = id;
    setActiveNav(id);
  }
});

const clearClickedNav = () => {
  clickedNavId = null;
};
window.addEventListener('wheel', clearClickedNav, { passive: true });
window.addEventListener('touchmove', clearClickedNav, { passive: true });
window.addEventListener('keydown', event => {
  if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
    clearClickedNav();
  }
});

function updateNavigation() {
  if (clickedNavId) {
    setActiveNav(clickedNavId);
    return;
  }
  let active = 'about';
  if (window.scrollY > 10) {
    navSections.forEach(section => {
      if (section.getBoundingClientRect().top <= 110) active = section.id;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4 && navSections.length) {
      active = navSections[navSections.length - 1].id;
    }
  }
  setActiveNav(active);
}
window.addEventListener('scroll', updateNavigation, { passive: true });
preprints.addEventListener('toggle', updateNavigation);
updateNavigation();
