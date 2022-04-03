import express from "express";

import morgan from "morgan";
import fs from "fs";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {movieRouter} from "./routes/movies.js";
import {imageRouter} from "./routes/images.js";

const app = express();
const PORT = 3000;

// Using the public folder at the root of the project
app.use(express.static("public"));
//OR
// Using the images folder at the route /images
app.use("/images", express.static("images"))

// Create Logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'});


app.use(morgan('combined', {stream: accessLogStream}));
app.use('/movies', movieRouter);
app.use('/images', imageRouter);


app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
});