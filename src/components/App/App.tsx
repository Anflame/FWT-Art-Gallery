import React, { FC, useState } from 'react';
import Cookies from 'js-cookie';
import Layout from '../Layout';
import { useAppSelector } from '../../hooks/Redux';
import CardList from '../../ui/CardList';
import { defaultContext, ThemeContext } from '../../utils/ThemeContext';

export const App: FC = () => {
  const { painterList } = useAppSelector(({ painters }) => painters);
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    const resultTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(resultTheme);
    Cookies.set('theme', resultTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Layout>
        <CardList painters={painterList} />
      </Layout>
    </ThemeContext.Provider>
  );
};
