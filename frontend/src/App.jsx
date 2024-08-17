import React from 'react';
import HelpCenter from './components/HelpCenter';
import { CardsProvider } from './context/CardsContext';
import './App.css';

const App = () => {
  return (
    <CardsProvider>
      <div className="App">
        <HelpCenter />
      </div>
    </CardsProvider>
  );
};

export default App;
