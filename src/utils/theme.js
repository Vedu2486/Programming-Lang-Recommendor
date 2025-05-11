// Theme management utilities

/**
 * Initialize theme based on user preference or system settings
 */
export function initTheme() {
  const savedTheme = localStorage.getItem('codeMatchTheme');
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem('codeMatchTheme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme() {
  const currentTheme = localStorage.getItem('codeMatchTheme') || 
    (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('codeMatchTheme', newTheme);
  
  return newTheme;
}

/**
 * Apply the specified theme to the document
 * @param {string} theme - 'light' or 'dark'
 */
export function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  
  localStorage.setItem('codeMatchTheme', theme);
}

/**
 * Get the current theme
 * @returns {string} - 'light' or 'dark'
 */
export function getCurrentTheme() {
  return localStorage.getItem('codeMatchTheme') || 
    (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}