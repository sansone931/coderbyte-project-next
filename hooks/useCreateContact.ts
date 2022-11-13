import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { type ContactFormData } from '../types/contacts';
import { CONTACTS_QUERY_KEY, type ContactsData } from './useContacts';

export const useCreateContact = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await axios.post<ContactsData>(
        `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        },
      );

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACTS_QUERY_KEY] });
    },
  });

  return { createContact: mutateAsync, createIsLoading: isLoading };
};
