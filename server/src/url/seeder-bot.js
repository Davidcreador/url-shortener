import Url from '../models/url';
import makeId from '../util/makeId';

export default (app) => {
  app.get('/db/seederbot', async(req, res, next) => {
    const urls = [
      {
        id: makeId(),
        path: 'http://facebook.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://twitter.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://google.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://youtube.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://instagram.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://linkedin.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wordpress.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://pinterest.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wikipedia.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wordpress.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://blogspot.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://apple.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://adobe.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://tumblr.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://amazon.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://youtu.be/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://goo.gl/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://vimeo.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://flickr.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://microsoft.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://yahoo.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://bit.ly/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://godaddy.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://buydomains.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://vk.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://reddit.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://w3.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://nytimes.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://t.co/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://europa.eu/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://statcounter.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://weebly.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://blogger.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://soundcloud.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://github.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://bbc.co.uk/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://jimdo.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://qq.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://myspace.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://yandex.ru/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wp.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://mozilla.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://google.de/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://gravatar.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://addthis.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://google.co.jp/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://theguardian.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://co.nz/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://bluehost.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://cnn.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wix.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://nih.gov/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://paypal.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://stumbleupon.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://creativecommons.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://digg.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://huffingtonpost.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://issuu.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://feedburner.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://imdb.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://yelp.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://parallels.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://addtoany.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://google.co.uk/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://dropbox.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://amazonaws.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://forbes.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://baidu.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://go.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://washingtonpost.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://msn.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://slideshare.net/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wixsite.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wsj.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://etsy.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://eventbrite.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://ameblo.jp/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://archive.org/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://telegraph.co.uk/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://amazon.co.uk/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://fc2.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://sourceforge.net/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://mail.ru/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://e-recht24.de/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://ebay.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://cpanel.net/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://free.fr/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://doubleclick.net/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://livejournal.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://reuters.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://typepad.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://dailymail.co.uk/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://bloomberg.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://cpanel.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://yahoo.co.jp/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://about.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://macromedia.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://amzn.to/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://eepurl.com/',
        description: '',
      },
      {
        id: makeId(),
        path: 'http://wikimedia.org/',
        description: '',
      },
    ];

    for (let i = 0; i < urls.length; i++) {
      const newUrl = new Url(urls[i]);
      newUrl.save();
    }

    res.send('Database seeded!');
  });
};
