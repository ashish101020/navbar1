import './App.css';
import { useEffect, useState } from 'react';
import NavbarTut from './components/Navbar/NavbarTut';


function App() {

  const current_theme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(current_theme);

  useEffect(()=> {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <div className={`app ${theme}`}>
      <NavbarTut theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
