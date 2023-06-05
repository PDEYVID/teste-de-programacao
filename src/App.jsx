import React, { useState } from 'react';
import Tarefa1 from './pages/Tarefa1';
import Tarefa2 from './pages/Tarefa2';
import Tarefa3 from './pages/Tarefa3';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'tarefa1':
        return <Tarefa1 />;
      case 'tarefa2':
        return <Tarefa2 />;
      case 'tarefa3':
        return <Tarefa3 />;
      default:
        return (
          <div>
            <h1>Teste de Programação</h1>
            <button onClick={() => handleButtonClick('tarefa1')}>Tarefa 1</button>
            <button onClick={() => handleButtonClick('tarefa2')}>Tarefa 2</button>
            <button onClick={() => handleButtonClick('tarefa3')}>Tarefa 3</button>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
