import express from "express";
import {movieRouter} from "./routes/movies.js";
import {imageRouter} from "./routes/images.js";


const app = express();

const PORT = 3000;
app.use('/movies', movieRouter);
app.use('/images', imageRouter);



app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
    // console.log(movies);
});