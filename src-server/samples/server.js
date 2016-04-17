import express from 'express';
import EventPublisher from '..';

var debug = require('debug')('server');

const app = express();

var server = app.listen(3010, () => {
  const host = server.address().address;
  const port = server.address().port;

  debug(`Server listening at http://${host}:${port}`);
});

var publisher = new EventPublisher(app);

setInterval(() => {
  publisher.publish('chat', 'This is a test');
}, 1000);
