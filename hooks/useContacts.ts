import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Contact } from '../types/contacts';

export const CONTACTS_QUERY_KEY = 'contacts';

export type ContactsData = Contact & { createdAt: string; updatedAt: string };

export const useContacts = () => {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useQuery<ContactsData[]>({
    queryKey: [CONTACTS_QUERY_KEY],
    queryFn: async () => {
      const res = await axios.get<ContactsData[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
      );
      return res.data;
    },
  });

  return { contacts, isLoading, isError };
};
