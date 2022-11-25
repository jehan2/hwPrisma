import { z, TypeOf } from 'zod';

export const addmovieSchema = z.object({
  body: z.object({
    name: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
    genre: z.enum(['Drama', 'Action','Comedy'],
             { required_error: 'type is required and must be one of this (Drama, Action, Comedy) !' }),
    rating: z.number({ required_error: 'number is required !' })
            .min(1, 'You must be between 1 - 5').max(5 , 'You must be between 1 - 5'),
    duration: z.number({ required_error: 'salary is required !' })
            .min(60,'You id must be more than 60'),
    createdat: z.date()
      
  }),
});
export const updatemovieSchema = z.object({
  body: z.object({
    
    name: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
    genre: z.enum(['Drama', 'Action','Comedy'],
             { required_error: 'type is required and must be one of this (Drama, Action, Comedy) !' }),
    rating: z.number({ required_error: 'number is required !' })
            .min(1, 'You must be between 1 - 5').max(5 , 'You must be between 1 - 5'),
    duration: z.number({ required_error: 'salary is required !' })
            .min(60,'You id must be more than 60'),
    createdat: z.date()
      
  }),
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export const deletemovieSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export const getmovieSchemaname = z.object({
  params: z.object({
    name: z
         .string({ required_error: 'name is required !' })
         .min(3, 'You name must be more than 3 char'),
  }),
});

export const getmovieSchemagenre = z.object({
  params: z.object({
    genre: z.enum(['Drama', 'Action','Comedy'],
             { required_error: 'type is required and must be one of this (Drama, Action, Comedy) !' })
  }),
});

export const getmovieSchemarating = z.object({
  params: z.object({
    rating: z.number({ required_error: 'number is required !' })
            .min(1, 'You must be between 1 - 5').max(5 , 'You must be between 1 - 5'),
          }),
        });

export type updateMovieSchemaType = z.infer<typeof updatemovieSchema>['params'];
export type deleteMovieSchemaType = z.infer<typeof deletemovieSchema>['params'];
export type addMovieSchemaType = z.infer<typeof addmovieSchema>['body'];
export type getnameMovieSchemaType = z.infer<typeof getmovieSchemaname>['params'];
export type getgenreMovieSchemaType = z.infer<typeof getmovieSchemagenre>['params'];
export type getratingMovieSchemaType = z.infer<typeof getmovieSchemarating>['params'];

//export type GetOneMovieSchemaType = z.infer<typeof getOnemovieSchema> ['query']