import { FC } from 'react';

import { Contact } from '../../../types/contacts';
import { ContactListItem } from './ContactListItem';
import { ContactListContainer } from './styled';

export type ContactListProps = {
  contacts: Contact[];
  onContactDeleteClick: (id: number) => void;
  onContactEditClick: (id: number) => void;
};

export const ContactList: FC<ContactListProps> = ({
  contacts,
  onContactDeleteClick,
  onContactEditClick,
}) => {
  return (
    <ContactListContainer>
      {contacts.map(({ id, firstName, lastName, phoneNumber }) => (
        <ContactListItem
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          onDeleteClick={onContactDeleteClick}
          onEditClick={onContactEditClick}
        />
      ))}
    </ContactListContainer>
  );
};
