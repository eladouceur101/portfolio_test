import React from 'react';
import GlobalStyles from './components/layout/GlobalStyles';
import Header from './components/header/header';
import Character from './components/character/character';
import Footer from './components/footer/footer';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Character />
    <Footer />
  </>
);

export default App;
