import { FC, ReactNode } from "react";
import "./styles.scss";
import cn from 'classnames';

interface BaseButtonProps<T> {
    handleClick?: () => void;
    className: string;
    text: ReactNode | string;
    isOutlined?: boolean;
    isFilled?: boolean;
    isDisabled?: boolean;
    others?: HTMLButtonElement;
}

export const Button: FC<BaseButtonProps<HTMLButtonElement>> = ({ handleClick, className, text, isOutlined, isFilled, ...others }) => {
  return (
    <button onClick={handleClick}
      disabled={others.isDisabled} 
      className={cn(className, isOutlined && 'btn_outlined', isFilled && 'btn_filled', others.isDisabled && 'btn_disabled')}
        >
        {text}
    </button>
  );
}