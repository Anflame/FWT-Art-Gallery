import { FC } from "react";
import { Card, CardProps } from "../Card/Card";
import styles from "./styles.module.scss";

interface CardListProps {
    painters: CardProps[];
}

export const CardList: FC<CardListProps> = ({painters}) => {
    return (
        <ul className={styles.cardList}>
            {painters.map((painter, idx) => <li className={styles.cardListes} key={idx}>
                <Card title={painter.title} name={painter.name} img={painter.img} />
            </li>)}
        </ul>
    )
}