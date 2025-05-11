import { calculateLanguageMatches } from '../data/questions.js';
import { renderIcon } from './header.js';
import { typeText } from '../utils/animation.js';

export function renderResultsScreen(container, { answers, onStartOver }) {
  const resultsScreen = document.createElement('div');
  resultsScreen.className = 'w-full max-w-3xl';
  container.appendChild(resultsScreen);
  
  const matches = calculateLanguageMatches(answers);
  
  // Results header
  const resultsHeader = document.createElement('div');
  resultsHeader.className = 'text-center mb-8';
  
  const resultsTitle = document.createElement('h2');
  resultsTitle.className = 'text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text';
  resultsTitle.textContent = 'Your Perfect Match';
  resultsHeader.appendChild(resultsTitle);
  
  const resultsDescription = document.createElement('p');
  resultsDescription.className = 'text-lg text-secondary mb-8';
  resultsDescription.textContent = 'Based on your unique profile, we\'ve found your ideal programming language match along with other great options.';
  resultsHeader.appendChild(resultsDescription);
  
  resultsScreen.appendChild(resultsHeader);
  
  // Top match highlight
  if (matches.length > 0) {
    const topMatch = matches[0];
    const topMatchCard = document.createElement('div');
    topMatchCard.className = 'bg-gradient-to-r from-primary-500 to-secondary-500 p-1 rounded-xl mb-8 transform hover:scale-102 transition-transform';
    
    const topMatchContent = document.createElement('div');
    topMatchContent.className = 'bg-white dark:bg-gray-900 rounded-lg p-6';
    
    const topMatchHeader = document.createElement('div');
    topMatchHeader.className = 'flex items-center justify-between mb-4';
    
    const topMatchTitle = document.createElement('h3');
    topMatchTitle.className = 'text-2xl font-bold text-primary-600 dark:text-primary-400';
    topMatchTitle.textContent = `${topMatch.data.name} - Perfect Match!`;
    
    const matchScore = document.createElement('div');
    matchScore.className = 'text-xl font-bold text-secondary-600 dark:text-secondary-400';
    matchScore.textContent = `${topMatch.score}% Match`;
    
    topMatchHeader.appendChild(topMatchTitle);
    topMatchHeader.appendChild(matchScore);
    topMatchContent.appendChild(topMatchHeader);
    
    const description = document.createElement('p');
    description.className = 'text-lg mb-4';
    description.textContent = topMatch.data.description;
    topMatchContent.appendChild(description);
    
    const matchDescription = document.createElement('p');
    matchDescription.className = 'text-lg mb-6 font-medium text-primary-700 dark:text-primary-300';
    matchDescription.textContent = topMatch.data.matchDescription;
    topMatchContent.appendChild(matchDescription);
    
    // Pros and cons in a modern layout
    const prosConsGrid = document.createElement('div');
    prosConsGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6';
    
    // Pros
    const prosCard = document.createElement('div');
    prosCard.className = 'bg-success-50 dark:bg-success-900/20 rounded-lg p-4';
    
    const prosTitle = document.createElement('h4');
    prosTitle.className = 'font-bold text-success-700 dark:text-success-400 mb-3';
    prosTitle.textContent = 'Strengths';
    prosCard.appendChild(prosTitle);
    
    const prosList = document.createElement('ul');
    prosList.className = 'space-y-2';
    topMatch.data.pros.forEach(pro => {
      const item = document.createElement('li');
      item.className = 'flex items-center text-success-600 dark:text-success-300';
      item.innerHTML = `${renderIcon('check')} <span class="ml-2">${pro}</span>`;
      prosList.appendChild(item);
    });
    prosCard.appendChild(prosList);
    prosConsGrid.appendChild(prosCard);
    
    // Cons
    const consCard = document.createElement('div');
    consCard.className = 'bg-error-50 dark:bg-error-900/20 rounded-lg p-4';
    
    const consTitle = document.createElement('h4');
    consTitle.className = 'font-bold text-error-700 dark:text-error-400 mb-3';
    consTitle.textContent = 'Challenges';
    consCard.appendChild(consTitle);
    
    const consList = document.createElement('ul');
    consList.className = 'space-y-2';
    topMatch.data.cons.forEach(con => {
      const item = document.createElement('li');
      item.className = 'flex items-center text-error-600 dark:text-error-300';
      item.innerHTML = `${renderIcon('x')} <span class="ml-2">${con}</span>`;
      consList.appendChild(item);
    });
    consCard.appendChild(consList);
    prosConsGrid.appendChild(consCard);
    
    topMatchContent.appendChild(prosConsGrid);
    
    // Resources section
    const resourcesSection = document.createElement('div');
    resourcesSection.className = 'bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-6';
    
    const resourcesTitle = document.createElement('h4');
    resourcesTitle.className = 'font-bold text-gray-900 dark:text-gray-100 mb-3';
    resourcesTitle.textContent = 'Start Learning';
    resourcesSection.appendChild(resourcesTitle);
    
    const resourcesList = document.createElement('div');
    resourcesList.className = 'grid grid-cols-1 md:grid-cols-2 gap-3';
    
    topMatch.data.resources.forEach(resource => {
      const resourceLink = document.createElement('a');
      resourceLink.href = resource.url;
      resourceLink.target = '_blank';
      resourceLink.rel = 'noopener noreferrer';
      resourceLink.className = 'flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
      resourceLink.innerHTML = `
        ${renderIcon('external-link')}
        <span class="ml-2 text-primary-600 dark:text-primary-400">${resource.title}</span>
      `;
      resourcesList.appendChild(resourceLink);
    });
    
    resourcesSection.appendChild(resourcesList);
    topMatchContent.appendChild(resourcesSection);
    
    topMatchCard.appendChild(topMatchContent);
    resultsScreen.appendChild(topMatchCard);
  }
  
  // Other matches
  if (matches.length > 1) {
    const otherMatchesTitle = document.createElement('h3');
    otherMatchesTitle.className = 'text-xl font-bold mb-4 mt-8';
    otherMatchesTitle.textContent = 'Other Great Matches';
    resultsScreen.appendChild(otherMatchesTitle);
    
    const otherMatches = document.createElement('div');
    otherMatches.className = 'space-y-4';
    
    matches.slice(1).forEach(match => {
      const matchCard = document.createElement('div');
      matchCard.className = 'bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
      
      const matchHeader = document.createElement('div');
      matchHeader.className = 'flex items-center justify-between mb-2';
      
      const matchName = document.createElement('h4');
      matchName.className = 'font-bold text-lg';
      matchName.textContent = match.data.name;
      
      const matchScore = document.createElement('span');
      matchScore.className = 'text-primary-600 dark:text-primary-400 font-medium';
      matchScore.textContent = `${match.score}% Match`;
      
      matchHeader.appendChild(matchName);
      matchHeader.appendChild(matchScore);
      matchCard.appendChild(matchHeader);
      
      const matchDescription = document.createElement('p');
      matchDescription.className = 'text-gray-600 dark:text-gray-300';
      matchDescription.textContent = match.data.description;
      matchCard.appendChild(matchDescription);
      
      otherMatches.appendChild(matchCard);
    });
    
    resultsScreen.appendChild(otherMatches);
  }
  
  // Action buttons
  const actionsContainer = document.createElement('div');
  actionsContainer.className = 'flex justify-center mt-8';
  
  const startOverButton = document.createElement('button');
  startOverButton.className = 'btn btn-outline';
  startOverButton.innerHTML = `${renderIcon('refresh')} Start Over`;
  startOverButton.addEventListener('click', onStartOver);
  actionsContainer.appendChild(startOverButton);
  
  resultsScreen.appendChild(actionsContainer);
  
  // Add typing animation effect to the first match description
  if (matches.length > 0) {
    setTimeout(() => {
      const firstMatchElement = document.querySelector('.language-result:first-child .language-body p:nth-child(2)');
      if (firstMatchElement) {
        const originalText = firstMatchElement.textContent;
        firstMatchElement.textContent = '';
        typeText(firstMatchElement, originalText, 20);
      }
    }, 1000);
  }
  
  return resultsScreen;
}