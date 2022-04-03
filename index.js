import express from "express";

import morgan from "morgan";
import fs from "fs";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {movieRouter} from "./routes/movies.js";
import {imageRouter} from "./routes/images.js";

import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Create Logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));
app.use('/movies', movieRouter);
app.use('/images', imageRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Using the public folder at the root of the project
app.use(express.static("public"));
//OR
// Using the images' folder at the route /images
app.use("/images", express.static("images"))


// POST - express.json and express.encoded
app.post('/item', (req, res)=>{
    console.log(req.body);
    res.send(req.body)
});

app.use((err,  req, res, next)=> {
console.error(err.stack);
res.status(500).send('Something is broken!');
});

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
});