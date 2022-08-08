import Card from './Card/Card';
import TypeCardButtons from './TypeCardButtons/TypeCardButtons';
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  const [design, setDesign] = useState('one');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const switchDesign = () => {
    const newDesign = design === 'one' ? 'two' : 'one';
    setDesign(newDesign);
  };

  return (
    <div className='app' data-theme={theme}>
      <Card design={design} />
      <TypeCardButtons switchTheme={switchTheme} switchDesign={switchDesign} />
    </div>
  );
}

export default App;
