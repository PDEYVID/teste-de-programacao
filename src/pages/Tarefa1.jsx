import React, { useState } from 'react';
import RomanNumerals from 'roman-numerals';
import './Tarefa1.css';

const Tarefa1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConvertClick = () => {
    if (inputValue) {
      if (isNaN(inputValue)) {
        const arabicNumber = RomanNumerals.toArabic(inputValue.toUpperCase());
        if (arabicNumber === null) {
          setConvertedValue('Número romano inválido');
        } else {
          setConvertedValue(`Número arábico equivalente: ${arabicNumber}`);
        }
      } else {
        const romanNumber = RomanNumerals.fromArabic(Number(inputValue));
        setConvertedValue(`Número romano equivalente: ${romanNumber}`);
      }
    } else {
      setConvertedValue('');
    }
  };

  const handleVoltarClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <h1 className="title">Conversor de Números Romanos</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um número romano ou arábico"
        />
        <button className="convert-button" onClick={handleConvertClick}>
          Converter
        </button>
      </div>
      {convertedValue && <p className="converted-value">{convertedValue}</p>}
      <button className="back-button" onClick={handleVoltarClick}>
        Voltar
      </button>
    </div>
  );
};

export default Tarefa1;




