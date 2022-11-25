import express from 'express';
import movieRouter from './routes/movie.router'
//import '@detenv/config';
import { connectDB } from './config/db';
import usersRouter from './routes/users.router'


const app = express();

connectDB();

app.use(express.json());


app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/users', usersRouter);


const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});