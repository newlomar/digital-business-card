import Card from './Card/Card';
import TypeCardButtons from './TypeCardButtons/TypeCardButtons';
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className='app' data-theme={theme}>
      <Card />
      <TypeCardButtons switchTheme={switchTheme} />
    </div>
  );
}

export default App;
