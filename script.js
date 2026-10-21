const events = [
  { year: 2026, date: '21–23 Mar', title: 'PythonAsia 2026', location: 'Manila, Philippines', countryCode: 'PH', type: 'regional', link: 'https://2026.pythonasia.org' },
  { year: 2026, date: '09 May', title: 'PyCon Busan 2026', location: 'Busan, South Korea', countryCode: 'KR', type: 'local', link: 'https://busan.pycon.kr/2026' },
  { year: 2026, date: '19–21 Jun', title: 'PyCon Singapore 2026', location: 'Singapore', countryCode: 'SG', type: 'national', link: 'https://pycon.sg' },
  { year: 2026, date: '08–09 Aug', title: 'PyCon Indonesia 2026', location: 'Jakarta, Indonesia', countryCode: 'ID', type: 'national', link: 'https://temp.pycon.id' },
  { year: 2026, date: '15–17 Aug', title: 'PyCon Korea 2026', location: 'South Korea', countryCode: 'KR', type: 'national', link: 'https://2026.pycon.kr' },
  { year: 2026, date: '21–23 Aug', title: 'PyCon Japan 2026', location: 'Hiroshima, Japan', countryCode: 'JP', type: 'national', link: 'https://2026.pycon.jp' },
  { year: 2026, date: '26–30 Aug', title: 'PyCon Australia 2026', location: 'Brisbane, Australia', countryCode: 'AU', type: 'national', link: 'https://2026.pycon.org.au' },
  { year: 2026, date: '17–18 Oct', title: 'PyCon Taiwan 2026', location: 'Taiwan', countryCode: 'TW', type: 'national', link: 'https://tw.pycon.org' },
  { year: 2026, date: '17–18 Oct', title: 'PyCon Davao 2026', location: 'Davao, Philippines', countryCode: 'PH', type: 'local', link: 'https://pycon-davao.durianpy.org' },
  { year: 2026, date: '14–15 Nov', title: 'PyCon Hong Kong 2026', location: 'Hong Kong', countryCode: 'HK', type: 'national', link: 'https://www.pycon.hk' },
  { year: 2027, date: 'June · tentative', title: 'PythonAsia 2027', location: 'Singapore', countryCode: 'SG', type: 'regional', link: 'https://pycon.sg' },
  { year: 2027, date: '18–19 Jun', title: 'PyCon Thailand 2027', location: 'Thailand', countryCode: 'TH', type: 'national', link: 'https://th.pycon.org' }
];

const eventList = document.querySelector('#event-list');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#event-search');
const filterButtons = document.querySelectorAll('.filter-button');

function renderEvents() {
  const activeYear = document.querySelector('.filter-button.is-active').dataset.year;
  const search = searchInput.value.trim().toLowerCase();
  const visibleEvents = events.filter((event) => {
    const matchesYear = activeYear === 'all' || String(event.year) === activeYear;
    const matchesSearch = `${event.title} ${event.location}`.toLowerCase().includes(search);
    return matchesYear && matchesSearch;
  });

  eventList.innerHTML = visibleEvents.map((event) => `
    <a class="event-card" href="${event.link}" target="_blank" rel="noopener">
      <span class="event-date">${event.date}<br />${event.year}</span>
      <span><span class="event-type ${event.type}">${event.type === 'regional' ? 'PYTHONASIA REGIONAL' : event.type === 'local' ? 'LOCAL PYCON' : 'NATIONAL PYCON'}</span><span class="event-title"><span class="event-flag" aria-hidden="true">${countryCodeToFlag(event.countryCode)}</span>${event.title}</span><span class="event-location">${event.location}</span></span>
      <span class="event-arrow" aria-hidden="true">↗</span>
    </a>
  `).join('');
  emptyState.hidden = visibleEvents.length > 0;
  document.querySelector('#event-count').textContent = events.length;
}

filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  renderEvents();
}));
searchInput.addEventListener('input', renderEvents);

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#copyright-year').textContent = new Date().getFullYear();
renderEvents();

function countryCodeToFlag(code) {
  if (!code || code.length !== 2) return '';
  return String.fromCodePoint(...code.toUpperCase().split('').map((letter) => letter.charCodeAt(0) + 127397));
}
