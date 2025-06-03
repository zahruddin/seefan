// JavaScript for dark mode toggle and other interactions

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  const darkIcon = document.getElementById('darkIcon');
  const lightIcon = document.getElementById('lightIcon');

  // Initialize icons based on current theme
  function updateIcons() {
    if (htmlElement.classList.contains('dark')) {
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
    } else {
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
    }
  }

  // Load theme from localStorage or default to dark
  if (localStorage.getItem('theme') === 'light') {
    htmlElement.classList.remove('dark');
  } else {
    htmlElement.classList.add('dark');
  }
  updateIcons();

  darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateIcons();
  });
});
