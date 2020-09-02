import React from 'react';
import './App.css';
import Paises from './components/Paises'
import PaisesProvider from './Context/PaisesContext'

function App() {
  return (
    <PaisesProvider>
      <div className="App">
        <Paises />
      </div>
    </PaisesProvider>

  );
}

export default App;
