import { FC, ReactNode } from "react";
import "./styles.scss";
import cn from 'classnames';


interface BaseButtonProps<T> {
    handleClick?: () => void;
    mixClass: string;
    children?: ReactNode;
    text: ReactNode | string;
    outlined?: boolean;
    filled?: boolean;
    disabled?: boolean;
    others?: HTMLButtonElement;
}
export const Button: FC<BaseButtonProps<HTMLButtonElement>> = ({ handleClick, mixClass, children, text, outlined, filled, ...others }) => {
    return (
        <button onClick={handleClick}
            disabled={others.disabled} 
            className={cn(mixClass, outlined && 'btn_outlined', filled && 'btn_filled', others.disabled && 'btn_disabled')}
                >
                {text}
        </button>
    );
}