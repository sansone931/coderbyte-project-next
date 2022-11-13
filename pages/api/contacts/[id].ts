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
  res: NextApiResponse<Contacts | null | { errors: FormattedErrors }>,
) => {
  await connectToDatabase();

  const { body, method, query } = req;

  switch (method) {
    case 'PATCH':
      try {
        const { id } = query;
        const { firstName, lastName, phoneNumber } = body;
        await Contacts.update(
          { firstName, lastName, phoneNumber },
          { where: { id } },
        );
        const updatedContact: Contacts | null = await Contacts.findByPk(
          id as string,
        );
        return res.status(200).json(updatedContact);
      } catch (error) {
        if (error instanceof ValidationError) {
          const formattedErrors = formatErrors(error);
          return res.status(400).json({
            errors: formattedErrors,
          });
        }
      }
    case 'DELETE':
      const { id } = query;
      const deletedContact: Contacts | null = await Contacts.findByPk(
        id as string,
      );
      await Contacts.destroy({ where: { id } });

      return res.status(200).json(deletedContact);
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
