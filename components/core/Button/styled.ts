import styled from 'styled-components';

import { ButtonVariant } from './types';

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  background-color: ${({ theme, $variant }) => theme.colors[$variant]};
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: filter 0.2s linear;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
    cursor: inherit;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.2);
  }

  &:active:not(:disabled) {
    filter: brightness(0.8);
  }
`;
