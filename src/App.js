//APP

import { useState } from 'react';


// STYLES
import './styles/App.css';

// COMPONENTS
import Preloader from './components/Preloader';
import Layout from './Layout';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useScroll } from './hooks/useScroll/useScroll'
import { ThemeProvider } from 'styled-components';




function App() {
  // Defina um objeto como o tema
  const theme = {
    primaryColor: 'blue',
    secondaryColor: 'green',
  };
  const [isLoad, setIsLoad] = useState(false)


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
