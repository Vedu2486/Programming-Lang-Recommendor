import { renderIcon } from './header.js';

/**
 * Render the welcome screen
 * @param {HTMLElement} container - The container element
 * @param {Object} props - Properties for the welcome screen
 * @param {Function} props.onStart - Function to call when the start button is clicked
 * @returns {HTMLElement} The welcome screen element
 */
export function renderWelcomeScreen(container, { onStart }) {
  const welcomeScreen = document.createElement('div');
  welcomeScreen.className = 'flex flex-col items-center text-center';
  container.appendChild(welcomeScreen);
  
  // Hero section
  const hero = document.createElement('div');
  hero.className = 'mb-8';
  
  // Animated title
  const title = document.createElement('h1');
  title.className = 'typing-animation mb-4';
  title.textContent = 'Find Your Perfect Programming Language';
  hero.appendChild(title);
  
  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.className = 'text-secondary mb-6';
  subtitle.textContent = 'Answer a few questions about your goals, interests, and preferences to discover which programming language is best suited for your journey.';
  hero.appendChild(subtitle);
  
  welcomeScreen.appendChild(hero);
  
  // Features grid
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8';
  
  const features = [
    {
      icon: 'zap',
      title: 'Personalized Recommendations',
      description: 'Get tailored programming language suggestions based on your unique profile.'
    },
    {
      icon: 'compass',
      title: 'Guided Tour',
      description: 'Discover the perfect language for your specific needs and learning style.'
    },
    {
      icon: 'book',
      title: 'Learning Resources',
      description: 'Receive curated resources to help you start your journey right away.'
    },
    {
      icon: 'users',
      title: 'Expert Insights',
      description: 'Benefit from advice based on industry expertise and best practices.'
    }
  ];
  
  features.forEach((feature, index) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'card stagger-item fade-in';
    featureCard.style.animationDelay = `${index * 100}ms`;
    
    const featureHeader = document.createElement('div');
    featureHeader.className = 'flex items-center mb-2';
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'text-primary-500 mr-3';
    iconContainer.innerHTML = renderIcon(feature.icon);
    featureHeader.appendChild(iconContainer);
    
    const featureTitle = document.createElement('h3');
    featureTitle.className = 'text-lg font-bold';
    featureTitle.textContent = feature.title;
    featureHeader.appendChild(featureTitle);
    
    featureCard.appendChild(featureHeader);
    
    const featureDescription = document.createElement('p');
    featureDescription.className = 'text-tertiary';
    featureDescription.textContent = feature.description;
    featureCard.appendChild(featureDescription);
    
    featuresGrid.appendChild(featureCard);
  });
  
  welcomeScreen.appendChild(featuresGrid);
  
  // Start button with animation
  const startBtnContainer = document.createElement('div');
  startBtnContainer.className = 'mt-6 pulse';
  
  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary btn-large';
  startBtn.textContent = 'Start Your Journey';
  startBtn.addEventListener('click', onStart);
  
  startBtnContainer.appendChild(startBtn);
  welcomeScreen.appendChild(startBtnContainer);
  
  return welcomeScreen;
}