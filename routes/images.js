import {movies} from "../data/fakedata.js";
import express from "express";

export const imageRouter = express.Router();

// READ - Get images url by name
imageRouter.get('/:name', (req, res)=>{
    const {name} = req.params;

    let listOfImages = [];

    movies.forEach(movie => {
        movie.images.forEach(image => {
            if(image.name.toLowerCase().includes(name.toLowerCase())){
                listOfImages.push(image.url);
            }
        })
    })

    if (listOfImages.length){
        res.status(200).json(listOfImages);
        // res.redirect({listOfImages});
        // res.Write("<img src=...`)
        // res.sendFile(filepath);
    } else {
        res.status(404).send('no such image')
    }
});