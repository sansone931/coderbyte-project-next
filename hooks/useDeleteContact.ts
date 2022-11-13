import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { CONTACTS_QUERY_KEY, type ContactsData } from './useContacts';

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete<ContactsData>(`/api/contacts/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACTS_QUERY_KEY] });
    },
  });

  return { deleteContact: mutateAsync, deleteIsLoading: isLoading };
};
