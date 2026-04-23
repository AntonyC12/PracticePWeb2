import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import BasicCalculator from './components/basic_calculator';
import Home from './components/home';
import CompleteCalculator from './components/calculator';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function ChangePage() {
    switch (currentPage) {
      case 'home':
        return <Home goPage={goPage} />;
      case 'basicCalculator':
        return <BasicCalculator goReturn={goPage} />;
      case 'completeCalculator':
        return <CompleteCalculator goReturn={goPage} />;
      default:
        return <Home goPage={goPage} />;
    }
  }
  function goPage(value) {
    setCurrentPage(value);
  }

  return (
    <div>
      {ChangePage()}
    </div>
  )
}

export default App;