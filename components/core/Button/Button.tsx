import { FC, ReactNode } from 'react';

import { StyledButton } from './styled';
import { type ButtonVariant } from './types';

export type ButtonProps = {
  variant: ButtonVariant;
  onClick?: () => void;
  children: ReactNode;
  type: 'button' | 'submit';
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  type,
  disabled,
}) => (
  <StyledButton
    $variant={variant}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);
