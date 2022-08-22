import React, { FC, useState } from 'react';
import { CardList } from '../CardList';
import img from '../images/cardImg.jpg';
import { Header } from '../Header';
import styles from './styles.module.scss';
import { Footer } from '../Footer';
import { defaultContext, ThemeContext } from '../utils/ThemeContext';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
};
  const painters = [
    {
      name: 'Painter',
      img: img,
      title: 'Painter',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    },
    {
      name: 'Story',
      img: img,
      title: 'Story',
    }
  ]


  return (
    <ThemeContext.Provider
    value={{
      theme,
      toggleTheme,
    }}>
      <Header />
      <main className={styles.main}>
        <CardList painters={painters} />
      </main>
      <Footer />
    </ThemeContext.Provider >
  );
}

export default App;
