import mongoose from 'mongoose';
import app from './app';
import {logger} from './util';

mongoose.Promise = global.Promise;

// setup mongodb connection
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('connection succesful');
    // start server
    app.listen(process.env.PORT || 8080, function() {
      const host = this.address().address;
      const {port} = this.address();
      logger.info(`UrlShortener-server is listening at http://${host}:${port}`);
    });
  })
  .catch(err => console.error(err));


// output all uncaught exceptions
process.on('uncaughtException', err => logger.error('uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('unhandled rejection:', error));
