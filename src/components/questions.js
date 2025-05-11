import { questions } from '../data/questions.js';
import { renderIcon } from './header.js';
import { staggeredAnimation } from '../utils/animation.js';

/**
 * Render the questions screen
 * @param {HTMLElement} container - The container element
 * @param {Object} props - Properties for the questions screen
 * @param {number} props.currentQuestionIndex - Current question index
 * @param {Array} props.answers - Current answers
 * @param {Function} props.onNext - Function to call when next button is clicked
 * @param {Function} props.onPrevious - Function to call when previous button is clicked
 * @param {Function} props.onComplete - Function to call when quiz is completed
 * @returns {HTMLElement} The questions screen element
 */
export function renderQuestionsScreen(container, { currentQuestionIndex, answers, onNext, onPrevious, onComplete }) {
  const questionsScreen = document.createElement('div');
  questionsScreen.className = 'question-container';
  container.appendChild(questionsScreen);
  
  // Progress bar
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = `${(currentQuestionIndex + 1) / questions.length * 100}%`;
  progressContainer.appendChild(progressBar);
  
  questionsScreen.appendChild(progressContainer);
  
  // Progress text
  const progressText = document.createElement('div');
  progressText.className = 'flex justify-between mb-6 text-tertiary';
  
  const progressStep = document.createElement('span');
  progressStep.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  progressText.appendChild(progressStep);
  
  questionsScreen.appendChild(progressText);
  
  // Current question
  const currentQuestion = questions[currentQuestionIndex];
  
  // Question title with animation
  const questionTitle = document.createElement('h2');
  questionTitle.className = 'slide-in';
  questionTitle.textContent = currentQuestion.title;
  questionsScreen.appendChild(questionTitle);
  
  // Question description
  const questionDescription = document.createElement('p');
  questionDescription.className = 'text-secondary mb-6 slide-in delay-100';
  questionDescription.textContent = currentQuestion.description;
  questionsScreen.appendChild(questionDescription);
  
  // Options grid
  const optionsGrid = document.createElement('div');
  optionsGrid.className = 'options-grid';
  questionsScreen.appendChild(optionsGrid);
  
  // Get previous answer for this question, if any
  const previousAnswer = answers.find(a => a.questionId === currentQuestion.id);
  let selectedOptionIds = previousAnswer ? 
    (Array.isArray(previousAnswer.answerId) ? previousAnswer.answerId : [previousAnswer.answerId]) : 
    [];
  
  // Create option cards
  currentQuestion.options.forEach(option => {
    const optionCard = document.createElement('div');
    optionCard.className = `option-card ${selectedOptionIds.includes(option.id) ? 'selected' : ''}`;
    optionCard.dataset.optionId = option.id;
    
    // Icon
    const optionIcon = document.createElement('div');
    optionIcon.className = 'mb-2 text-primary-500';
    optionIcon.innerHTML = renderIcon(option.icon);
    optionCard.appendChild(optionIcon);
    
    // Label
    const optionLabel = document.createElement('div');
    optionLabel.className = 'font-medium';
    optionLabel.textContent = option.label;
    optionCard.appendChild(optionLabel);
    
    // Event listener for selection
    optionCard.addEventListener('click', () => {
      if (currentQuestion.multiSelect) {
        // Toggle selection for multi-select questions
        if (selectedOptionIds.includes(option.id)) {
          selectedOptionIds = selectedOptionIds.filter(id => id !== option.id);
          optionCard.classList.remove('selected');
        } else {
          selectedOptionIds.push(option.id);
          optionCard.classList.add('selected');
        }
      } else {
        // Single select: clear other selections
        document.querySelectorAll('.option-card').forEach(card => {
          card.classList.remove('selected');
        });
        selectedOptionIds = [option.id];
        optionCard.classList.add('selected');
      }
    });
    
    optionsGrid.appendChild(optionCard);
  });
  
  // Apply staggered animation to options
  setTimeout(() => {
    staggeredAnimation(document.querySelectorAll('.option-card'), 'scale-in');
  }, 300);
  
  // Navigation buttons
  const navigationButtons = document.createElement('div');
  navigationButtons.className = 'navigation-buttons';
  
  // Back button
  const backButton = document.createElement('button');
  backButton.className = 'btn btn-outline';
  backButton.innerHTML = `${renderIcon('chevron-left')} Back`;
  backButton.addEventListener('click', onPrevious);
  navigationButtons.appendChild(backButton);
  
  // Next/Finish button
  const nextButton = document.createElement('button');
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  nextButton.className = 'btn btn-primary';
  nextButton.innerHTML = isLastQuestion ? 
    `Finish ${renderIcon('check')}` : 
    `Next ${renderIcon('chevron-right')}`;
  
  nextButton.addEventListener('click', () => {
    if (selectedOptionIds.length === 0) {
      // Require an answer
      alert('Please select an option to continue');
      return;
    }
    
    // Create answer object
    const answer = {
      questionId: currentQuestion.id,
      answerId: currentQuestion.multiSelect ? selectedOptionIds : selectedOptionIds[0]
    };
    
    if (isLastQuestion) {
      onNext(answer); // Save the last answer
      onComplete();
    } else {
      onNext(answer);
    }
  });
  
  navigationButtons.appendChild(nextButton);
  questionsScreen.appendChild(navigationButtons);
  
  return questionsScreen;
}