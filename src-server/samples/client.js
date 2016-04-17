import EventSource from 'eventsource';

var es = new EventSource('http://localhost:3010/events');

es.addEventListener('chat', function (e) {
  console.log(e.data);
});
