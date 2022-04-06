import express from "express";
import {db} from "../db.js";

export const imageRouter = express.Router();

// READ - Get images url by name
imageRouter.get('/:name', (req, res)=>{

    const {name} = req.params;
    db
        .raw('select * from images where name = ?', name)
        .then((result) => {
            if (result.rows.length) {
                res.status(200).json(result.rows);
            } else {
                res.status(400).send('no such image')
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});