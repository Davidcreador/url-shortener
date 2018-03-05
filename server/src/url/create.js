import Url from '../models/url';
import makeId from '../util/makeId';

export default (app) => {
  app.post('/api/url', async(req, res) => {
    Url.findOne({path: req.body.path}, (err, url) => {
      // if error
      if (err) return next(err);

      if (!url) {
        const newUrl = new Url({
          id: makeId(),
          path: req.body.path,
          description: req.body.description,
        });
        newUrl.save((error, urlSaved) => {
          if (err) return console.log('Error saving', error);
          const {id} = urlSaved;
          const base32Id = id.toString(36);
          return res.json(base32Id);
        });
      } else {
        const {id} = url;
        const base32Id = id.toString(36);
        return res.json(base32Id);
      }
    });
  });
};
