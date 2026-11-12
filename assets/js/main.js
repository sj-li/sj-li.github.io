const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
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
  if (subtitle) subtitle.textContent = {selected: 'Selected Publications', all: 'All Publications', embodied: 'Embodied AI', spatial: '3D & Spatial', driving: 'Autonomous Driving', others: 'Others'}[selected];
  filterPapers();
  requestAnimationFrame(updateNavigation);
}));
if (search) search.addEventListener('input', filterPapers);
filterPapers();
const navLinks = [...navigation.querySelectorAll('a')];
function updateNavigation() {
  let active = 'about';
  document.querySelectorAll('main > section').forEach(section => {
    if (section.getBoundingClientRect().top <= 145) active = section.id;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    active = document.querySelector('main > section:last-of-type').id;
  }
  navLinks.forEach(link => {
    const current = link.hash === `#${active}`;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateNavigation, { passive: true });
preprints.addEventListener('toggle', updateNavigation);
updateNavigation();
