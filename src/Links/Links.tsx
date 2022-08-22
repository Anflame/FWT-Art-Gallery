import { FC, ReactNode } from "react";
import styles from './styles.module.scss';

interface LinksProps<T> {
    href: string;
    name: string | ReactNode;
    others?: HTMLAnchorElement;
}

export const Links: FC<LinksProps<HTMLAnchorElement>> = ({href,name,...others}) => {
    return <a className={styles.link} href={href}>{name}</a>;
}