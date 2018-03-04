import winston from 'winston';

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: do {
        if (process.env.NODE_ENV === 'testing') {
          'error'; // eslint-disable-line
        } else if (process.env.NODE_ENV === 'production') {
          'info'; // eslint-disable-line
        } else {
          'debug'; // eslint-disable-line
        }
      },
      colorize: true,
      timestamp: true,
      prettyPrint: true,
      label: 'urlshortener-server',
    }),
  ],
});

// create stream for morgan
logger.stream = {
  write: message => logger.info(message),
};
