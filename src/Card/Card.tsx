import { FC } from "react";
import styles from './styles.module.scss';
import images from '../images/cardImg.jpg';

export interface CardProps {
    title: string;
    name: string;
    handleCLick?: () => void;
    img: string;
    arg?: any;
    primary?: boolean;
}

export const Card: FC<CardProps> = ({ title, name, img, handleCLick, ...args }) => {
    return (
        <figure className={styles.card} onClick={handleCLick}>
            <img src={images} alt={title} className={styles.cardImg} />
            <figcaption className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardAnotherInfo}>{`1280-1920`}</p>
            </figcaption>
        </figure>  
    );
}  