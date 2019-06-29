import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import morgan from 'morgan';

import User from './models/user';

import config from 'config';
import db from './db/db';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Listening localhost:' + port);

module.exports = app;
