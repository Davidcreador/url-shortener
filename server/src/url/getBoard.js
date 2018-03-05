import Url from '../models/url';

export default (app) => {
  app.get('/board', async(req, res, next) => {
    Url.find({}, (err, result) => {
    // if error
      if (err) return console.log(err);
      return res.json(result);
    });
  });
};
