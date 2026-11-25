(() => {
  const root = document.documentElement;

  function savedTheme() {
    try {
      return localStorage.getItem('site-theme');
    } catch {
      return null;
    }
  }

  function applyTheme(value) {
    const theme = value === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#0f1117' : '#ffffff';
  }

  applyTheme(savedTheme());

  function bindThemeToggle() {
    applyTheme(root.dataset.theme);
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('site-theme', next);
      } catch {
        // Keep the page toggle working when storage is unavailable.
      }
      applyTheme(next);
    });
    window.addEventListener('storage', event => {
      if (event.key === 'site-theme' || event.key === null) applyTheme(savedTheme());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindThemeToggle, { once: true });
  } else {
    bindThemeToggle();
  }
})();
