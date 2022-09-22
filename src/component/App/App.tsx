import React, { FC, useState } from 'react';
import cn from 'classnames/bind';
import CardList from '../CardList';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu';
import { useAppSelector } from '../../hooks/Redux';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const App: FC = () => {
  const { painters } = useAppSelector((state) => state.painters);
  const handleClickLogIn = () => {};
  const handleClickSignUp = () => {};

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Menu
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
      <Header
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
      <main className={cx('main')}>
        <CardList painters={painters} />
      </main>
      <Footer />
    </>
  );
};
