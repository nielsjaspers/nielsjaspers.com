document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const icon = document.getElementById('theme-toggle-icon');
  
  if (!toggleBtn || !icon) return;
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      icon.innerHTML = '<circle cx="12" cy="12" r="5" fill="#fffafa"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#fffafa" stroke-width="2" stroke-linecap="round"/>';
    } else {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor"/>';
    }
  }
  
  function getPreferredTheme() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  }
  
  toggleBtn.addEventListener('click', toggleTheme);
  
  // Initialize theme
  setTheme(getPreferredTheme());
});