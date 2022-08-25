import { FC } from "react";
import { Card } from "../Card/Card";
import { CardProps } from "../comon-types";
import styles from "./styles.module.scss";

type CardListProps = {
    painters: CardProps[];
}

export const CardList: FC<CardListProps> = ({ painters }) => {
  return (
    <ul className={styles.cardList}>
      {painters.map(({ name, title, id, img }) => <li className={styles.cardListes}>
        <Card title={ title } name={ name } img={ img } id={ id } />
      </li>)}
    </ul>
  )
}