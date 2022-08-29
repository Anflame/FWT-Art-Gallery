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
      id: 1,
      name: 'Painter',
      img,
      title: 'Painter',
    },
    {
      id: 2,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 3,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 4,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 5,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 6,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 7,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 8,
      name: 'Story',
      img,
      title: 'Story',
    },
    {
      id: 9,
      name: 'Story',
      img,
      title: 'Story',
    },
  ];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Header />
      <main className={styles.main}>
        <CardList painters={painters} />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
};
