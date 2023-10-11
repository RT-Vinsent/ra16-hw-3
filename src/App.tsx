// import React from 'react';
import './App.css';
import FilmsView from './components/task1/FilmsView/FilmsView';
import LIstOffers from './components/task2/ListOffers/ListOffers';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
          <h1>Домашнее задание «Props»</h1>
          <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      {/* Компонент задачи №1 */}
      <FilmsView />

      {/* Компонент задачи №2 */}
      <LIstOffers />
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
