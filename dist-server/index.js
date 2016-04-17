'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var debug = require('debug')('server');

var EventPublisher = (function () {
  function EventPublisher(app) {
    var router = arguments.length <= 1 || arguments[1] === undefined ? app : arguments[1];
    var path = arguments.length <= 2 || arguments[2] === undefined ? '/events' : arguments[2];
    return (function () {
      var _this = this;

      _classCallCheck(this, EventPublisher);

      this.app = app;
      this.router = router;
      this.path = path;

      this.subscribers = [];

      this.app.get(this.path, function (req, res) {
        res.writeHead(200, {
          'content-type': 'text/event-stream',
          'cache-control': 'no-cache',
          'connection': 'keep-alive'
        });

        res.write('id\n\n');
        _this.subscribers.push(res);

        debug('Subscribers: ' + _this.subscribers.length);

        req.on('close', function () {
          debug('Closed');
          _this.removeSubscriber(res);
        });

        req.on('end', function () {
          debug('end');
          _this.removeSubscriber(res);
        });
      });
    }).apply(this, arguments);
  }

  _createClass(EventPublisher, [{
    key: 'removeSubscriber',
    value: function removeSubscriber(req) {
      debug('Removing subscriber');
      var idx = this.subscribers.indexOf(req);
      if (idx != -1) {
        this.subscribers.splice(idx, 1);
      } else {
        debug('subscriber not found');
      }
      debug('Subscribers: ' + this.subscribers.length);
    }
  }, {
    key: 'publish',
    value: function publish(event, data) {
      this.subscribers.map(function (req) {
        req.write('event:' + event + '\n');
        req.write('data:' + data + '\n\n');
      });
    }
  }]);

  return EventPublisher;
})();

exports['default'] = EventPublisher;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRWxCLGNBQWM7QUFDdEIsV0FEUSxjQUFjLENBQ3JCLEdBQUc7UUFBRSxNQUFNLHlEQUFHLEdBQUc7UUFBRSxJQUFJLHlEQUFHLFNBQVM7d0JBQUU7Ozs0QkFEOUIsY0FBYzs7QUFFL0IsVUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFakIsVUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O0FBRXRCLFVBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFLO0FBQ2xDLFdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ2pCLHdCQUFjLEVBQUUsbUJBQW1CO0FBQ25DLHlCQUFlLEVBQUUsVUFBVTtBQUMzQixzQkFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUFDOztBQUlILFdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEIsY0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUzQixhQUFLLG1CQUFpQixNQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUcsQ0FBQzs7QUFFakQsV0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtBQUVwQixlQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEIsZ0JBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDOztBQUVILFdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQU07QUFFbEIsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2IsZ0JBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO09BQ04sQ0FBQyxDQUFDO0tBQ0o7R0FBQTs7ZUFsQ2tCLGNBQWM7O1dBb0NqQiwwQkFBQyxHQUFHLEVBQUU7QUFDcEIsV0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0IsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsVUFBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDWixZQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7T0FDakMsTUFBTTtBQUNMLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO09BQy9CO0FBQ0QsV0FBSyxtQkFBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUcsQ0FBQztLQUNsRDs7O1dBRU0saUJBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUNuQixVQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUM1QixXQUFHLENBQUMsS0FBSyxZQUFVLEtBQUssUUFBSyxDQUFDO0FBQzlCLFdBQUcsQ0FBQyxLQUFLLFdBQVMsSUFBSSxVQUFPLENBQUM7T0FDL0IsQ0FBQyxDQUFDO0tBQ0o7OztTQXBEa0IsY0FBYzs7O3FCQUFkLGNBQWMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy1zZXJ2ZXIvIn0=
