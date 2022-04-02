import {movies} from "../data/fakedata.js";
import express from "express";

export const movieRouter = express.Router();

// READ - Get movie list
movieRouter.get('/', (req, res)=>{
    res.status(200).json(movies)
});

// READ - Get movie by title
movieRouter.get('/:title', (req, res)=>{
    const {title} = req.params;
    const foundMovie = movies.find(movie => movie.title === title);

    if (foundMovie){
        res.status(200).json(foundMovie);
    } else {
        res.status(400).send('no such movie')
    }
});

