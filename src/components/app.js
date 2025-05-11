import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';
import { renderWelcomeScreen } from './welcome.js';
import { renderQuestionsScreen } from './questions.js';
import { renderResultsScreen } from './results.js';
import { animateTransition } from '../utils/animation.js';

// State management for the application
const state = {
  currentScreen: 'welcome', // 'welcome', 'questions', 'results'
  answers: [],
  currentQuestionIndex: 0
};

// Main container reference
let mainContainer;

/**
 * Initialize and render the app
 */
export function renderApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  
  // Create header
  const header = renderHeader();
  appContainer.appendChild(header);
  
  // Create main content container
  mainContainer = document.createElement('main');
  mainContainer.className = 'main-content';
  appContainer.appendChild(mainContainer);
  
  // Create footer
  const footer = renderFooter();
  appContainer.appendChild(footer);
  
  // Render initial screen
  renderCurrentScreen();
}

/**
 * Render the current screen based on application state
 */
function renderCurrentScreen() {
  // Clear main container
  mainContainer.innerHTML = '';
  
  // Create container for current screen
  const screenContainer = document.createElement('div');
  screenContainer.className = 'container';
  mainContainer.appendChild(screenContainer);
  
  // Render appropriate screen
  switch (state.currentScreen) {
    case 'welcome':
      renderWelcomeScreen(screenContainer, {
        onStart: () => navigateTo('questions')
      });
      break;
    case 'questions':
      renderQuestionsScreen(screenContainer, {
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        onNext: (answer) => handleNextQuestion(answer),
        onPrevious: () => handlePreviousQuestion(),
        onComplete: () => navigateTo('results')
      });
      break;
    case 'results':
      renderResultsScreen(screenContainer, {
        answers: state.answers,
        onStartOver: () => handleStartOver()
      });
      break;
  }
  
  // Apply fade-in animation to the screen
  screenContainer.classList.add('fade-in');
  setTimeout(() => {
    screenContainer.classList.remove('fade-in');
  }, 300);
}

/**
 * Navigate to a different screen
 * @param {string} screen - The screen to navigate to ('welcome', 'questions', 'results')
 */
export function navigateTo(screen) {
  // Don't navigate if already on the screen
  if (state.currentScreen === screen) return;
  
  const oldContainer = mainContainer.querySelector('.container');
  
  // Apply fade-out animation to current screen
  oldContainer.classList.add('fade-out');
  
  setTimeout(() => {
    state.currentScreen = screen;
    renderCurrentScreen();
  }, 300);
}

/**
 * Handle moving to the next question
 * @param {object} answer - The answer data for the current question
 */
function handleNextQuestion(answer) {
  // Save the answer
  const existingAnswerIndex = state.answers.findIndex(a => a.questionId === answer.questionId);
  
  if (existingAnswerIndex >= 0) {
    // Update existing answer
    state.answers[existingAnswerIndex] = answer;
  } else {
    // Add new answer
    state.answers.push(answer);
  }
  
  // Go to next question or results
  if (state.currentQuestionIndex < 4) {
    state.currentQuestionIndex++;
    renderCurrentScreen();
  } else {
    navigateTo('results');
  }
}

/**
 * Handle moving to the previous question
 */
function handlePreviousQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    renderCurrentScreen();
  } else {
    navigateTo('welcome');
  }
}

/**
 * Handle starting over the quiz
 */
function handleStartOver() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  navigateTo('welcome');
}