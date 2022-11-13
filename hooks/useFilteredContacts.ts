import { ChangeEventHandler, useMemo, useState } from 'react';

import { type Contact } from '../types/contacts';

export const useFilteredContacts = (contacts: Contact[] | undefined) => {
  const [search, setSearch] = useState('');

  const filteredContacts = useMemo(() => {
    if (!contacts) return [];

    return contacts.filter((contact) =>
      contact.lastName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [contacts, search]);

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return { search, handleChangeSearch, filteredContacts };
};
