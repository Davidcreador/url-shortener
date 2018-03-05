import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import {logger} from './util';

// routes
import setupUrlRoutes from './url';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// setup CORS
app.use(cors());

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// add cookie parsing
app.use(cookieParser());

// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

setupUrlRoutes(app);

// catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// export app
export default app;
