import { FC, useContext, useLayoutEffect, useState } from "react";
import { Button } from "../Button";
import { ThemeContext } from "../utils/ThemeContext";
import styles from './styles.module.scss';
import themeIcon from './images/themeIcon.svg';
import themeIconLight from './images/themeIconLight.svg';
import logoImg from './images/logo.svg';
import logoImgLight from './images/logoLight.svg';
import menuIcon from './images/menuIcon.svg'; 
import menuIconLight from './images/menuIconLight.svg'; 
import menuIconClose from './images/menuIconClose.svg'; 
import menuIconCloseLight from './images/menuIconCloseLight.svg'; 
import { Links } from "../Links";

export const Header: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const [show, setShow] = useState(false);

    const handleClickLogIn = () => {}
    const handleClickSignUp = () => {}
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Links name={<img src={theme === 'dark'? logoImg : logoImgLight} alt="logo" className={styles.logo} />} href={'/'} />
               
                <div className={styles.authAndChangeThemeWrapp}>
                    <div className={styles.authWrapp}>
                        <Button handleClick={handleClickLogIn} mixClass={'authBtn'} text={'login'}></Button>
                        <Button handleClick={handleClickSignUp} mixClass={'authBtn'} text={'signUp'}></Button>
                    </div>
                    <Button handleClick={toggleTheme} mixClass={'themeBtn'} text={(theme === 'dark') ?
                        <img src={themeIcon} alt='theme' /> : <img src={themeIconLight} alt='theme' />} />
                </div>
                {(!show && theme === 'dark') &&
                    <img src={menuIcon} alt='menuIcon' className={styles.menuIcon} onClick={() => setShow(!show) } />
                }
                {(!show && theme === 'light') &&
                    <img src={menuIconLight} alt='menuIconLight' className={styles.menuIcon} onClick={() => setShow(!show) } />
                }                   
                {show &&  
                <div className={styles.menu}>
                    <div className={styles.menuPopUpContent}>
                        {(show && theme === 'dark') &&
                            <img src={menuIconClose} className={styles.menuIconClose} alt='menuIconClose' onClick={() => setShow(!show) } />
                        }
                        {(show && theme === 'light') &&
                            <img src={menuIconCloseLight} className={styles.menuIconClose} alt='menuIconCloseLight' onClick={() => setShow(!show) } />
                        }
                        <div className={styles.menuThemeWrapp} onClick={toggleTheme}>   
                            <Button mixClass={'themeBtn'} text={(theme === 'dark') ? <img src={themeIcon} alt='theme' /> : <img src={themeIconLight} alt='theme' />} />
                            <p className={styles.menuThemeMode}>{(theme === 'dark') ? 'light mode' : 'dark mode'}</p>
                        </div> 
                        
                        <Button handleClick={handleClickLogIn} mixClass={'authBtnMobile'} text={'login'}></Button>
                        <Button handleClick={handleClickSignUp} mixClass={'authBtnMobile'} text={'signUp'}></Button>
                    </div>
                </div>
                }
            </div>
    </header>
    )
}