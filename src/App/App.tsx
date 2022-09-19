import React, { FC, useState } from 'react';
import cn from 'classnames/bind';
import CardList from '../CardList';
import Footer from '../Footer';
import Header from '../Header';
import { defaultContext, ThemeContext } from '../utils/ThemeContext';
import { painters } from '../constants';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Header />
      <main className={cx('main')}>
        <CardList painters={painters} />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
};
