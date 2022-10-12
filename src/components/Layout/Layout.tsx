import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames/bind';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const handleClickLogIn = () => {};
  const handleClickSignUp = () => {};

  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Header
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
      <main className={cx('main', isShow && 'menuShow')}>{children}</main>
      <Footer />
      <Menu
        isShow={isShow}
        setIsShow={setIsShow}
        handleClickLogIn={handleClickLogIn}
        handleClickSignUp={handleClickSignUp}
      />
    </>
  );
};
