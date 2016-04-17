var debug = require('debug')('server');

export default class EventPublisher {
  constructor(app, router = app, path = '/events') {
    this.app = app;
    this.router = router;
    this.path = path;

    this.subscribers = [];

    this.app.get(this.path, (req, res) => {
        res.writeHead(200, {
          'content-type': 'text/event-stream',
          'cache-control': 'no-cache',
          'connection': 'keep-alive'
        });

        // TODO Support message id's and support "getting up to speed"
        // by playing all of the messages to date (conflated of course)
        res.write('id\n\n');
        this.subscribers.push(res);

        debug(`Subscribers: ${this.subscribers.length}`);

        req.on('close', () => {
          // Closed normally
          debug('Closed');
          this.removeSubscriber(res);
        });

        req.on('end', () => {
          // Closed abnormally
          debug('end');
          this.removeSubscriber(res);
        });
    });
  }

  removeSubscriber(req) {
    debug('Removing subscriber');
    var idx = this.subscribers.indexOf(req);
    if(idx != -1) {
      this.subscribers.splice(idx, 1);
    } else {
      debug('subscriber not found');
    }
    debug(`Subscribers: ${this.subscribers.length}`);
  }

  publish(event, data) {
    this.subscribers.map((req) => {
      req.write(`event:${event}\n`);
      req.write(`data:${data}\n\n`);
    });
  }
}
