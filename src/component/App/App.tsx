import React, { FC, useState } from 'react';
import cn from 'classnames/bind';
import Cookies from 'js-cookie';
import CardList from '../CardList';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu';
import { useAppSelector } from '../../hooks/Redux';
import { defaultContext, ThemeContext } from '../../utils/ThemeContext';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const App: FC = () => {
  const { painterList } = useAppSelector(({ painters }) => painters);
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    const resultTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(resultTheme);
    Cookies.set('theme', resultTheme);
  };
  const handleClickLogIn = () => {};
  const handleClickSignUp = () => {};

  const [isShow, setIsShow] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Header
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
      <main className={cx('main', isShow && 'menuShow')}>
        <CardList painters={painterList} />
      </main>
      <Footer />
      <Menu
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
    </ThemeContext.Provider>
  );
};
