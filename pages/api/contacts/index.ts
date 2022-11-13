import type { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'sequelize';

import { connectToDatabase } from '../../../server/connection';
import { Contacts } from '../../../server/models/contacts';
import {
  formatErrors,
  type FormattedErrors,
} from '../../../server/utils/formatErrors';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Contacts[] | Contacts | { errors: FormattedErrors }>,
) => {
  await connectToDatabase();

  const { body, method } = req;

  switch (method) {
    case 'GET':
      const allContacts: Contacts[] = await Contacts.findAll();
      return res.status(200).json(allContacts);
    case 'POST':
      try {
        const { firstName, lastName, phoneNumber } = body;
        const contact = await Contacts.create({
          firstName,
          lastName,
          phoneNumber,
        });
        return res.status(200).json(contact);
      } catch (error) {
        if (error instanceof ValidationError) {
          const formattedErrors = formatErrors(error);
          return res.status(400).json({
            errors: formattedErrors,
          });
        }
      }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
