import { FC } from 'react';
import cn from 'classnames/bind';
import { Card } from '../Card/Card';
import { CardProps } from '../comon-types';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type CardListProps = {
  painters: CardProps[];
};

export const CardList: FC<CardListProps> = ({ painters }) => {
  return (
    <ul className={cx('cardList')}>
      {painters.map(({ name, title, id, img }) => (
        <li className={cx('cardListes')} key={id}>
          <Card title={title} name={name} img={img} id={id} />
        </li>
      ))}
    </ul>
  );
};
