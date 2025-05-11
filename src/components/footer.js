/**
 * Render the application footer
 * @returns {HTMLElement} The footer element
 */
export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  const container = document.createElement('div');
  container.className = 'container flex justify-between items-center';
  footer.appendChild(container);
  
  const copyright = document.createElement('div');
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} CodeMatch`;
  container.appendChild(copyright);
  
  const links = document.createElement('div');
  links.className = 'flex gap-4';
  
  const privacyLink = document.createElement('a');
  privacyLink.href = '#';
  privacyLink.textContent = 'Privacy Policy';
  links.appendChild(privacyLink);
  
  const termsLink = document.createElement('a');
  termsLink.href = '#';
  termsLink.textContent = 'Terms of Service';
  links.appendChild(termsLink);
  
  container.appendChild(links);
  
  return footer;
}