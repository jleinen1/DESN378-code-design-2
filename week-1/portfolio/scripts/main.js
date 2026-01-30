const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

// load saved theme
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else {
  // 2. check system preference
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = systemPrefersDark ? 'dark' : 'light';
}

// 3. save
toggle.addEventListener('click', function () {
  const currentTheme = root.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

