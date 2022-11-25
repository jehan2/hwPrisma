import express from 'express';
import validate from '../middleware/validate';
import { users } from '@prisma/client';
import { adduser, getusers } from '../controller/users.controller';
import { usersSchema } from '../zod_schema/users.schema';

const router = express.Router();

router.get('/', getusers);
router.post('/', validate(usersSchema) ,adduser);

export default router;