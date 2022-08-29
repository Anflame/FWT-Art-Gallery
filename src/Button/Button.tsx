import { FC, ReactNode } from 'react';
import './styles.scss';
import cn from 'classnames';

interface BaseButtonProps {
  handleClick?: () => void;
  className: string;
  children: ReactNode;
  isOutlined?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  args?: HTMLButtonElement;
}

export const Button: FC<BaseButtonProps> = ({
  handleClick,
  className,
  children,
  isOutlined,
  isFilled,
  ...args
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={args.isDisabled}
      className={cn(
<<<<<<< HEAD
        'comonBtn',
        className,
        isOutlined && 'btn_outlined',
        isFilled && 'btn_filled',
        args.isDisabled && 'btn_disabled'
=======
        'commonBtn',
        className,
        isOutlined && 'btn_outlined',
        isFilled && 'btn_filled',
        args.isDisabled && 'btn_disabled',
>>>>>>> master
      )}
    >
      {children}
    </button>
  );
};
