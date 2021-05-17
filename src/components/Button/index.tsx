import React, { FC, MouseEvent } from 'react';
import s from './Button.module.scss';

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
