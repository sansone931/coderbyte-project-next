import styled from 'styled-components';

export const ModalStyle = styled.div`
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
`;

export const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
`;
