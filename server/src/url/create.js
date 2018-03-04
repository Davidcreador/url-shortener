export default (app) => {
  app.post('/api/url', async(req, res) => {
    const {text} = req.body;

    // make sure text is not empty
    if (!text || !text.length) {
      res.status(400).send({error: 'Text should be present!'});
      return;
    }

    // send created question back
    res.send('url');
  });
};
