import { z, TypeOf } from 'zod';

export const usersSchema = z.object({
  body: z.object({
    username: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
    password: z
         .number({ required_error: 'Password is required !' })
         .min(6, 'Password is required !'),
    email: z.string({ required_error: 'email is required !' }),
    role: z.enum(['Admin', 'user'],
             { required_error: 'type is required and must be one of this (Admin, user) !' }),
    joiningYear: z.string({ required_error: 'Joining Year is required !' }),
    age:z.number({ required_error: 'age is required !' })
      
  }),
});
export type UsersSchemaType = z.infer<typeof usersSchema>['body'];