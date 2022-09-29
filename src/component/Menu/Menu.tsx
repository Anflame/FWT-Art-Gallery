import { FC } from 'react';
import cn from 'classnames/bind';
import Button from '../Button';
import { Context } from '../../hooks/Context';
import type { MenuProps } from '../../comon-types';
import { ReactComponent as MenuIconClose } from '../../assets/images/menuIconClose.svg';
import { ReactComponent as ThemeIcon } from '../../assets/images/themeIcon.svg';
import { ReactComponent as ThemeIconLight } from '../../assets/images/themeIconLight.svg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const Menu: FC<MenuProps> = ({
  isShow,
  setIsShow,
  handleClickLogIn,
  handleClickSignUp,
}) => {
  const { theme, toggleTheme } = Context();
  return (
    <div
      className={cx('menu', isShow && 'menuShow')}
      onClick={() => setIsShow(!isShow)}
    >
      <div
        className={cx('menuPopUpContent', isShow && 'menuPopUpContentShow')}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuIconClose
          fill={theme === 'dark' ? '#DEDEDE' : '#575757'}
          onClick={() => setIsShow(!isShow)}
          className={cx('menuIconClose')}
        />
        <div className={cx('menuThemeWrapp')} onClick={toggleTheme}>
          <Button
            className={'themeBtn'}
            children={
              theme === 'dark' ? (
                <ThemeIcon fill="#DEDEDE" />
              ) : (
                <ThemeIconLight fill="#575757" />
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
  );
};
