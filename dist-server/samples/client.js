'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _eventsource = require('eventsource');

var _eventsource2 = _interopRequireDefault(_eventsource);

var es = new _eventsource2['default']('http://localhost:3010/events');

es.addEventListener('chat', function (e) {
  console.log(e.data);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7MkJBQXdCLGFBQWE7Ozs7QUFFckMsSUFBSSxFQUFFLEdBQUcsNkJBQWdCLDhCQUE4QixDQUFDLENBQUM7O0FBRXpELEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDdkMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDckIsQ0FBQyxDQUFDIiwiZmlsZSI6InNhbXBsZXMvY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMtc2VydmVyLyJ9
