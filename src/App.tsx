import React from 'react';
import './App.css';
import FilmsView from './components/task1/FilmsView/FilmsView';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
          <h1>Домашнее задание «Props»</h1>
          <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      <FilmsView />
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
