import { FC } from 'react';

import { Button } from '../../core';
import {
  ButtonContainer,
  FullName,
  ItemContainer,
  PhoneNumber,
} from './styled';

export type ContactListItemProps = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  onDeleteClick: (id: number) => void;
  onEditClick: (id: number) => void;
};

export const ContactListItem: FC<ContactListItemProps> = ({
  id,
  firstName,
  lastName,
  phoneNumber,
  onDeleteClick,
  onEditClick,
}) => (
  <ItemContainer>
    <div>
      <FullName>
        {firstName} {lastName}
      </FullName>
      <PhoneNumber>{phoneNumber}</PhoneNumber>
    </div>
    <ButtonContainer>
      <Button type="button" variant="primary" onClick={() => onEditClick(id)}>
        Edit
      </Button>
      <Button type="button" variant="danger" onClick={() => onDeleteClick(id)}>
        Delete
      </Button>
    </ButtonContainer>
  </ItemContainer>
);
