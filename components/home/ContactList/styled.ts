import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FullName = styled.div`
  font-size: 1.25rem;
`;

export const PhoneNumber = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
`;

export const ButtonContainer = styled.div`
  & > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

export const ContactListContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  overflow: hidden;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
