import { FC, useContext, useLayoutEffect } from 'react';
import cn from 'classnames/bind';
import { ThemeContext } from '../../utils/ThemeContext';
import Button from '../Button';
import Links from '../Links';
import type { MenuProps } from '../../comon-types';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menuIcon.svg';
import { ReactComponent as ThemeIcon } from '../../assets/images/themeIcon.svg';
import { ReactComponent as ThemeIconLight } from '../../assets/images/themeIconLight.svg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const Header: FC<MenuProps> = ({
  handleClickLogIn,
  handleClickSignUp,
  setIsShow,
  isShow,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <Links
          children={<Logo fill={theme === 'dark' ? '#DEDEDE' : '#575757'} />}
          href={'/'}
        />

        <div className={cx('authAndChangeThemeWrapp')}>
          <div className={cx('authWrapp')}>
            <Button
              handleClick={handleClickLogIn}
              className={'authBtn'}
              children={'login'}
            ></Button>
            <Button
              handleClick={handleClickSignUp}
              className={'authBtn'}
              children={'signUp'}
            ></Button>
          </div>
          <Button
            handleClick={toggleTheme}
            className={'themeBtn'}
            children={
              theme === 'dark' ? (
                <ThemeIcon fill="#DEDEDE" />
              ) : (
                <ThemeIconLight fill="#575757" />
              )
            }
          />
        </div>
        <>
          <MenuIcon
            fill={theme === 'dark' ? '#DEDEDE' : '#575757'}
            className={cx('menuIcon')}
            onClick={() => setIsShow(!isShow)}
          />
        </>
      </div>
    </header>
  );
};
