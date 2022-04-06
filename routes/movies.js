import express from "express";
import {db} from "../db.js";

export const movieRouter = express.Router();


// READ - Get movie list
movieRouter.get('/', (req, res) => {
    db
        .raw('select * from movies')
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(function (error) {
            console.error(error);
        });
});

// READ - Get movie by title
movieRouter.get('/:title', (req, res) => {
    const {title} = req.params;
    db
        .raw('select * from movies where title = ?', title)
        .then((result) => {
            if (result.rows.length) {
                res.status(200).json(result.rows);
            } else {
                res.status(400).send('no such movie')
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});

