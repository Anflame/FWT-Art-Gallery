import { FC, ReactNode } from "react";
import styles from './styles.module.scss';

interface LinksProps {
    href: string;
    children: ReactNode;
    others?: HTMLAnchorElement;
}

export const Links: FC<LinksProps> = ({href,children,...others}) => {
    return <a className={styles.link} href={href}>{children}</a>;
}