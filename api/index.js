import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();



const app=express();
app.use(express.json());

mongoose
  // .connect("mongodb+srv://ahamid234567890:yPd9fu5suhw5eltA@mern-estate.d6dzov8.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate")
  .connect(process.env.MONGO)
  .then(()=>{
    console.log("connected to MongoDB!");
  }).catch((err)=>{
    console.log(err);
  });


app.listen(3000, ()=>{
    console.log("server is running on the port 3000!!");
     }
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,req,res,next)=>{
  const statusCode =err.StatusCode ||'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});