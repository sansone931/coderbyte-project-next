import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { type ContactFormData } from '../types/contacts';
import { CONTACTS_QUERY_KEY, type ContactsData } from './useContacts';

export const useUpdateContact = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await axios.patch<ContactsData>(
        `/api/contacts/${data.id}`,
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

  return { updateContact: mutateAsync, updateIsLoading: isLoading };
};
