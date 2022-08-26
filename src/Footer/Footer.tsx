import { FC, useContext } from "react";
import { Links } from "../Links";
import styles from './styles.module.scss';
import facebookImg from './images/facebook.svg';
import vkImg from './images/vk.svg';
import instargamImg from './images/instagram.svg';
import facebookImgLight from './images/facebookLight.svg';
import vkImgLight from './images/vkLight.svg';
import instargamImgLight from './images/instagramLight.svg';
import { ThemeContext } from "../utils/ThemeContext";

export const Footer: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.projectInfoSignature}>
          <p className={styles.projectInfo}>Проект реализован в рамках стажировки
              для Frontend-разработчиков от компании <Links href={'https://framework.team'} children={'FrameWork Team'} />
          </p>
          <p className={styles.projectSignature}>Сидоров Денис 2022</p>
        </div>

        <ul className={styles.socNetWorksList}>
          <li className={styles.socNetWorksListes}>
            <Links href={'https://facebook.com'} children={ theme === 'dark' ? 
              <img src={facebookImg} alt='Facebook' />
              :
              <img src={facebookImgLight} alt='Facebook' />
            }/>
          </li>
          <li className={styles.socNetWorksListes}>
            <Links href={'https://vk.com'} children={theme === 'dark' ? 
              <img src={vkImg} alt='Vkontakte' />
              :
              <img src={vkImgLight} alt='Vkontakte' />
            }/>
          </li>
          <li className={styles.socNetWorksListes}>   
            <Links href={'https://instagram.com'} children={theme === 'dark' ? 
              <img src={instargamImg} alt='Instagram' />
              :
              <img src={instargamImgLight} alt='Instagram' />
            }/>
          </li>
        </ul>
      </div>
    </footer>
  );
}