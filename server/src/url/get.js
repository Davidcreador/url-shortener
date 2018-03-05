import Url from '../models/url';

export default (app) => {
  app.get('/api/url/:id', async(req, res) => {
    // decode param :id
    const encodedId = req.params.id;
    const decodedId = parseInt(encodedId, 36);

    Url.findOne({id: decodedId}, (err, url) => {
    // if error
      if (err) return console.log(err);
      if (!url) console.log('NO URL');

      res.redirect(302, url.path);
      return res.json(url);
    });
  });
};
