import { FC } from 'react';

import { Button } from '../../core';
import { Container } from './styled';

export type ContactsHeaderProps = {
  onAddContactClick: () => void;
};

export const ContactsHeader: FC<ContactsHeaderProps> = ({
  onAddContactClick,
}) => (
  <Container>
    <h2>Contacts</h2>
    <Button type="button" variant="primary" onClick={onAddContactClick}>
      Add Contact
    </Button>
  </Container>
);
