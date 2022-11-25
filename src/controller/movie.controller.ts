import { Movie } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { 
    addMovieSchemaType,
    updateMovieSchemaType,
    deleteMovieSchemaType,
    getgenreMovieSchemaType,
    getnameMovieSchemaType,
    getratingMovieSchemaType
 } from '../zod_schema/movie.schema';


export const getmovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const mov = await prisma.movie.findMany();
      return res.status(200).json(mov);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };
  export const addmovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newContact = req.body as Movie;
  
      await prisma.movie.create({
        data: newContact,
      });
      return res.status(201).json({ message: 'New contact added !' });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      if (prismaError.code == 'P2002') {
        return res.status(400).json({
          message: 'You phone number have been used before',
        });
      }
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };

  export const updatemovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const upmovie = req.body as Movie;
      const { id } = req.params as updateMovieSchemaType ;
  
      await prisma.movie.update({
        where: { id },
        data: upmovie,
      });
      return res.status(200).json({ message: ' updated' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };

  export const deletemovie = async (req: Request, res: Response) => {
    try {
      const { id } = req.params as deleteMovieSchemaType ;
  
      await prisma.movie.delete({
        where: { id },
      });
      return res.status(200).json({ message: 'Contact Deleted !' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };
  
  export const getmoviename = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const {name} = req.params as getnameMovieSchemaType;
        const movies = await prisma.movie.findFirst({
            where: {name},
        });
        return res.status(200).json(movies);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};
// export const getMovieGenre = async (req: Request, res:Response, next: NextFunction) => {
//   try{
//       const {genre} = req.query as getgenreMovieSchemaType;
//       const movies = await prisma.movie.findUniqueOrThrow({
//           where: {genre: genre as ['Drama', 'Action', 'Comady']},
//       });
//       return res.status(200).json(movies);
//   }catch(error){
//       console.log(error);
//       return res.status(500).json({message: "Server Error !"});
//   }
// };

export const getmovierating = async (req: Request, res:Response, next: NextFunction) => {
  try{
      const {rating} = req.params as unknown  as getratingMovieSchemaType;
      const movies = await prisma.movie.findFirst({
          where: {rating},
      });
      return res.status(200).json(movies);
  }catch(error){
      console.log(error);
      return res.status(500).json({message: "Server Error !"});
  }
};