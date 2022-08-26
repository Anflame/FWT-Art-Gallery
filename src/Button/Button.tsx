import { FC, ReactNode } from "react";
import "./styles.scss";
import cn from 'classnames';

interface BaseButtonProps {
    handleClick?: () => void;
    className: string;
    children: ReactNode;
    isOutlined?: boolean;
    isFilled?: boolean;
    isDisabled?: boolean;
    others?: HTMLButtonElement;
}

export const Button: FC<BaseButtonProps> = ({ handleClick, className, children, isOutlined, isFilled, ...others }) => {
  return (
    <button onClick={handleClick}
      disabled={others.isDisabled} 
      className={cn('logInBtn', className, isOutlined && 'btn_outlined', isFilled && 'btn_filled', others.isDisabled && 'btn_disabled')}
        >
        {children}
    </button>
  );
}