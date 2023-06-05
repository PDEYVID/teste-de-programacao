import React, { useState, useEffect, useCallback } from 'react';
import './Tarefa2.css';

const Tarefa2 = () => {
  const rows = 30;
  const cols = 30;

  const [grid, setGrid] = useState(() => {
    const rowArray = Array(rows).fill(false);
    const initialGrid = [];
    for (let i = 0; i < rows; i++) {
      initialGrid.push([...rowArray]);
    }
    return initialGrid;
  });

  const [running, setRunning] = useState(false);

  const handleCellClick = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  const handleStartStopClick = () => {
    setRunning(!running);
  };

  const handleClearClick = () => {
    const clearedGrid = grid.map((row) => row.map(() => false));
    setGrid(clearedGrid);
  };

  const handleRandomizeClick = () => {
    const randomGrid = grid.map((row) =>
      row.map(() => Math.random() > 0.7)
    );
    setGrid(randomGrid);
  };

  const countAliveNeighbors = useCallback((grid, row, col) => {
    const neighbors = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    let count = 0;
    for (let i = 0; i < neighbors.length; i++) {
      const [x, y] = neighbors[i];
      const newRow = row + x;
      const newCol = col + y;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol]
      ) {
        count++;
      }
    }

    return count;
  }, []);

  useEffect(() => {
    let intervalId;

    const runGame = () => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIdx) =>
          row.map((cell, colIdx) => {
            const aliveNeighbors = countAliveNeighbors(prevGrid, rowIdx, colIdx);

            if (!cell && aliveNeighbors === 3) {
              return true;
            } else if (cell && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
              return false;
            } else {
              return cell;
            }
          })
        );

        return newGrid;
      });
    };

    if (running) {
      intervalId = setInterval(runGame, 100);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [countAliveNeighbors, running]);

  return (
    <div className="container">
      <h1 className="title">Jogo da Vida</h1>
      <div className="buttons-container">
        <button className="start-stop-button" onClick={handleStartStopClick}>
          {running ? 'Parar' : 'Iniciar'}
        </button>
        <button className="clear-button" onClick={handleClearClick}>
          Limpar
        </button>
        <button className="randomize-button" onClick={handleRandomizeClick}>
          Aleatório
        </button>
      </div>
      <div className="grid">
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              className={`cell ${cell ? 'alive' : ''}`}
              onClick={() => handleCellClick(rowIdx, colIdx)}
            />
          ))
        )}
      </div>
      <a href="/" className="back-button">Voltar para a página inicial</a>
    </div>
  );
};

export default Tarefa2;
