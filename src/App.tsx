import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CodeMatch from './components/CodeMatch';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
        <CodeMatch />
      </div>
    </ThemeProvider>
  );
}

export default App;