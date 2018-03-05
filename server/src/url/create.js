import Url from '../models/url';
import makeId from '../util/makeId';

export default (app) => {
  app.post('/url', async(req, res, next) => {
    const path = req.body.path.includes('https://') || req.body.path.includes('http://') ? req.body.path : `http://${req.body.path}`;

    Url.findOne({path}, (err, url) => {
      // if error
      if (err) return next(err);

      if (!url) {
        const newUrl = new Url({
          id: makeId(),
          path,
          description: req.body.description,
        });

        newUrl.save((error, urlSaved) => {
          if (err) return console.log('Error saving', error);
          const {id} = urlSaved;
          const base32Id = id.toString(36);
          const customUrl = process.env.HOST + base32Id;
          return res.json(customUrl);
        });
      } else {
        const {id} = url;
        const base32Id = id.toString(36);
        const customUrl = process.env.HOST + base32Id;
        return res.json(customUrl);
      }
    });
  });
};
