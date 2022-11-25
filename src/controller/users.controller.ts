import { users } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';


export const getusers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const usre = await prisma.users.findMany();
      return res.status(200).json(usre);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };

  export const adduser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newuser = req.body as users;
  
      await prisma.users.create({
        data: newuser,
      });
      return res.status(201).json({ message: 'New user added !' });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      if (prismaError.code == 'P2002') {
        return res.status(400).json({
          message: 'rating have been used before',
        });
      }
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };