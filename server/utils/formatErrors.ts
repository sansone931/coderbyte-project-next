import { ValidationError } from 'sequelize';

export type FormattedErrors = Record<string, string>;

export const formatErrors = (error: ValidationError): FormattedErrors => {
  const formattedErrors: FormattedErrors = {};

  error.errors.forEach((e) => {
    if (e.path) {
      formattedErrors[e.path] = e.message;
    }
  });

  return formattedErrors;
};
