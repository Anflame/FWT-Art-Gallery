import { FC } from 'react';
import cn from 'classnames/bind';
import type { CardProps } from '../../comon-types';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import images from '../../assets/images/cardImg.jpg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const Card: FC<CardProps> = ({ title, handleCLick }) => (
  <figure className={cx('card')} onClick={handleCLick}>
    <img src={images} alt={title} className={cx('cardImg')} />
    <figcaption className={cx('cardInfoWrapp')}>
      <div className={cx('cardInfo')}>
        <h2 className={cx('cardTitle')}>{title}</h2>
        <p className={cx('cardAnotherInfo')}>{'1280-1920'}</p>
      </div>
      <div className={cx('cardInfoAfter')}>
        <Arrow fill={'#DEDEDE'} />
      </div>
    </figcaption>
  </figure>
);
