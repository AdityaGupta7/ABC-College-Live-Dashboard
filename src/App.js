import React from 'react';
import Header from './components/Header';
import StatsLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <StatsLayout />
      </div>
    </div>
  );
}

export default App;
