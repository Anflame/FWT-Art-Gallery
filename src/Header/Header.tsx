import { FC, useContext, useLayoutEffect, useState } from 'react';
import cn from 'classnames/bind';
import { Button } from '../Button';
import { ThemeContext } from '../utils/ThemeContext';
import styles from './styles.module.scss';
import themeIcon from './images/themeIcon.svg';
import themeIconLight from './images/themeIconLight.svg';
import logoImg from './images/logo.svg';
import logoImgLight from './images/logoLight.svg';
import menuIcon from './images/menuIcon.svg';
import menuIconLight from './images/menuIconLight.svg';
import menuIconClose from './images/menuIconClose.svg';
import menuIconCloseLight from './images/menuIconCloseLight.svg';
import { Links } from '../Links';

const cx = cn.bind(styles);

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [show, setShow] = useState(false);

  const handleClickLogIn = () => {};
  const handleClickSignUp = () => {};
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <Links
          children={
            <img
              src={theme === 'dark' ? logoImg : logoImgLight}
              alt="logo"
              className={cx('logo')}
            />
          }
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
                <img src={themeIcon} alt="theme" />
              ) : (
                <img src={themeIconLight} alt="theme" />
              )
            }
          />
        </div>
        {!show && theme === 'dark' && (
          <img
            src={menuIcon}
            alt="menuIcon"
            className={cx('menuIcon')}
            onClick={() => setShow(!show)}
          />
        )}
        {!show && theme === 'light' && (
          <img
            src={menuIconLight}
            alt="menuIconLight"
            className={cx('menuIcon')}
            onClick={() => setShow(!show)}
          />
        )}
        {show && (
          <div className={cx('menu')}>
            <div className={cx('menuPopUpContent')}>
              {show && theme === 'dark' && (
                <img
                  src={menuIconClose}
                  className={cx('menuIconClose')}
                  alt="menuIconClose"
                  onClick={() => setShow(!show)}
                />
              )}
              {show && theme === 'light' && (
                <img
                  src={menuIconCloseLight}
                  className={cx('menuIconClose')}
                  alt="menuIconCloseLight"
                  onClick={() => setShow(!show)}
                />
              )}
              <div className={cx('menuThemeWrapp')} onClick={toggleTheme}>
                <Button
                  className={'themeBtn'}
                  children={
                    theme === 'dark' ? (
                      <img src={themeIcon} alt="theme" />
                    ) : (
                      <img src={themeIconLight} alt="theme" />
                    )
                  }
                />
                <p className={cx('menuThemeMode')}>
                  {theme === 'dark' ? 'light mode' : 'dark mode'}
                </p>
              </div>

              <Button
                handleClick={handleClickLogIn}
                className={'authBtnMobile'}
                children={'login'}
              ></Button>
              <Button
                handleClick={handleClickSignUp}
                className={'authBtnMobile'}
                children={'signUp'}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
