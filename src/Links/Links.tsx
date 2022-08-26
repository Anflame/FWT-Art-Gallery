import { FC, ReactNode } from "react";
import styles from './styles.module.scss';

interface LinksProps {
  href: string;
  children: ReactNode;
  args?: HTMLAnchorElement;
}

export const Links: FC<LinksProps> = ({ href,children, ...args }) => {
  return <a className={ styles.link } href={ href }>{ children }</a>;
}