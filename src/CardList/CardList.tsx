import { FC } from "react";
import { Card } from "../Card/Card";
import { CardProps } from "../comon-types";
import styles from "./styles.module.scss";

type CardListProps = {
    painters: CardProps[];
}

export const CardList: FC<CardListProps> = ({painters , painters: [{id, title, name, img}]}) => {
  return (
    <ul className={styles.cardList}>
      {painters.map(() => <li className={styles.cardListes} key={id}>
        <Card title={title} name={name} img={img} id={id} />
      </li>)}
    </ul>
  )
}