import React from 'react';
import './stylesheets/App.scss';
import { Header, Main } from './components';

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </>
  )
}
