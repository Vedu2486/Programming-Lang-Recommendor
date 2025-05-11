import { renderApp } from './components/app.js';
import { initTheme } from './utils/theme.js';

// Initialize theme based on user preference
initTheme();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});