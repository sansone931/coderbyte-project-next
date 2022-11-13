import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.border};
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.danger};
  margin: 0.25rem 0.5rem;
`;
