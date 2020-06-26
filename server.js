import dotenv from 'dotenv'
dotenv.config()

//imports
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'
import chalk from 'chalk';

//declarations
const app = express();

//logger
app.use(morgan(':method :host :status'));

//database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true  })
const db = mongoose.connection
db.on('error', error => console.log(chalk.hex('#050505').bgHex('#c74442')(error)))
db.once('open',() => console.log(chalk.hex('#050505').bgHex('#54e88e')('Connected to Mongoose! Database is up!!')))

//listener
let PORT = process.env.PORT
app.listen(PORT, () => console.debug(chalk.hex('#050505').bgHex('#9191e3')(`Server is Booming @ ${PORT}!`)))