'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var debug = require('debug')('server');

var app = (0, _express2['default'])();

var server = app.listen(3010, function () {
  var host = server.address().address;
  var port = server.address().port;

  debug('Server listening at http://' + host + ':' + port);
});

var publisher = new _2['default'](app);

setInterval(function () {
  publisher.publish('chat', 'This is a test');
}, 1000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvc2VydmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7dUJBQW9CLFNBQVM7Ozs7Z0JBQ0YsSUFBSTs7OztBQUUvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXZDLElBQU0sR0FBRyxHQUFHLDJCQUFTLENBQUM7O0FBRXRCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQU07QUFDbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDOztBQUVuQyxPQUFLLGlDQUErQixJQUFJLFNBQUksSUFBSSxDQUFHLENBQUM7Q0FDckQsQ0FBQyxDQUFDOztBQUVILElBQUksU0FBUyxHQUFHLGtCQUFtQixHQUFHLENBQUMsQ0FBQzs7QUFFeEMsV0FBVyxDQUFDLFlBQU07QUFDaEIsV0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztDQUM3QyxFQUFFLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6InNhbXBsZXMvc2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMtc2VydmVyLyJ9
