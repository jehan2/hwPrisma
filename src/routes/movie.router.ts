import express from 'express';
import validate from '../middleware/validate';
import {
    addmovie,
    deletemovie,
    getmovie,
    getmoviename,
    getmovierating,
    updatemovie,
  } from '../controller/movie.controller';
  import {
    addmovieSchema,
    deletemovieSchema,
    getmovieSchemagenre,
    getmovieSchemaname,
    getmovieSchemarating,
  //  getOneContactSchema,
    updatemovieSchema,
  } from '../zod_schema/movie.schema';
import { Movie } from '@prisma/client';

// import {
//   movieSchema,
//   MovieSchemaType,
// } from '../zod_schema/movie.schema';

const router = express.Router();



router.get('/', getmovie);

router.post('/', validate(addmovieSchema), addmovie);

router.put('/:id',validate(updatemovieSchema), updatemovie);

router.delete('/:id', validate(deletemovieSchema),deletemovie);

router.get('./:name', validate(getmovieSchemaname),getmoviename )

router.get('./:genre', validate(getmovieSchemagenre),getmoviename)

router.get('./:rating', validate(getmovieSchemarating),getmovierating)

// router.get('/search/:id', (req, res)=>{
//   const {id} = req.params;
//   const searcharr = movies.filter((ser)=>{
//    if (ser.name === id || ser.genre === id ){
//     return ser
//    }
//   })
// return res.json(searcharr)
// });


// router.get('/:name', (req, res) => {
//   let { name }  = req.params;
//   let searchArr = movies.filter((item)=>{
//     return item.name.toLowerCase().includes(name);
//   })
//   return res.json(searchArr);
// });

// router.get('/:genre', (req, res) => {
//   let { genre }  = req.params;
//   let searchArr = movies.filter((item)=>{
//     return item.genre.toLowerCase().includes(genre);
//   })
//   return res.json(searchArr);
// });
export default router;