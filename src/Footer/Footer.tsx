import { FC, useContext } from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
import { Links } from '../Links';
import facebookImg from './images/facebook.svg';
import vkImg from './images/vk.svg';
import instargamImg from './images/instagram.svg';
import facebookImgLight from './images/facebookLight.svg';
import vkImgLight from './images/vkLight.svg';
import instargamImgLight from './images/instagramLight.svg';
import { ThemeContext } from '../utils/ThemeContext';

const cx = cn.bind(styles);

export const Footer: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('projectInfoSignature')}>
          <p className={cx('projectInfo')}>
            Проект реализован в рамках стажировки для Frontend-разработчиков от
            компании{' '}
            <Links
              href={'https://framework.team'}
              children={'FrameWork Team'}
            />
          </p>
          <p className={cx('projectSignature')}>Сидоров Денис 2022</p>
        </div>

        <ul className={cx('socNetWorksList')}>
          <li className={cx('socNetWorksListes')}>
            <Links
              href={'https://facebook.com'}
              children={
                theme === 'dark' ? (
                  <img src={facebookImg} alt="Facebook" />
                ) : (
                  <img src={facebookImgLight} alt="Facebook" />
                )
              }
            />
          </li>
          <li className={cx('socNetWorksListes')}>
            <Links
              href={'https://vk.com'}
              children={
                theme === 'dark' ? (
                  <img src={vkImg} alt="Vkontakte" />
                ) : (
                  <img src={vkImgLight} alt="Vkontakte" />
                )
              }
            />
          </li>
          <li className={cx('socNetWorksListes')}>
            <Links
              href={'https://instagram.com'}
              children={
                theme === 'dark' ? (
                  <img src={instargamImg} alt="Instagram" />
                ) : (
                  <img src={instargamImgLight} alt="Instagram" />
                )
              }
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
