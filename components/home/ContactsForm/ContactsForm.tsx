import { FC, FormEventHandler } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import { type ContactFormData } from '../../../types/contacts';
import { Button, Input } from '../../core';

type ContactsFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<ContactFormData>;
  formState: FormState<ContactFormData>;
  isAdding: boolean;
  isLoading: boolean;
};

export const ContactsForm: FC<ContactsFormProps> = ({
  onSubmit,
  register,
  formState,
  isAdding,
  isLoading,
}) => {
  const firstName = register('firstName', {
    required: 'This field is required',
  });
  const lastName = register('lastName', { required: 'This field is required' });
  const phoneNumber = register('phoneNumber', {
    required: 'This field is required',
    pattern: {
      value: /^[0-9]{9}$/g,
      message: 'Please enter a valid phone number',
    },
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>{isAdding ? 'Add' : 'Edit'} Contact</h2>
      <Input
        label="First Name"
        name={firstName.name}
        onChange={firstName.onChange}
        onBlur={firstName.onBlur}
        inputRef={firstName.ref}
        errorText={formState.errors.firstName?.message}
        disabled={isLoading}
      />
      <Input
        label="Last Name"
        name={lastName.name}
        onChange={lastName.onChange}
        onBlur={lastName.onBlur}
        inputRef={lastName.ref}
        errorText={formState.errors.lastName?.message}
        disabled={isLoading}
      />
      <Input
        label="Phone Number"
        name={phoneNumber.name}
        onChange={phoneNumber.onChange}
        onBlur={phoneNumber.onBlur}
        inputRef={phoneNumber.ref}
        errorText={formState.errors.phoneNumber?.message}
        disabled={isLoading}
      />
      <Button
        type="submit"
        variant="primary"
        disabled={!formState.isValid || isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};
