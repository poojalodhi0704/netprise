import moment from 'moment';
const events = JSON.parse(
  `[{
  "id": 0,
  "name": "xyz",
  "start": "2018-06-13T12:41:31.046Z",
  "end": "2018-06-13T12:41:31.046Z"
}, {
  "id": 1,
  "name": "abc",
  "start": "2018-06-06T18:22:42.716Z",
  "end": "2018-06-06T18:22:42.716Z"
}, {
  "id": 3,
  "name": "qwe",
  "start": "2018-06-14T18:53:31.353Z",
  "end": "2018-06-14T18:53:31.353Z"
}, {
  "id": 3,
  "name": "asd",
  "start": "2017-06-06T10:50:35.587Z",
  "end": "2017-06-06T10:50:35.587Z"
}, {
  "id": 4,
  "name": "ghg",
  "start": "2017-06-01T07:26:27.020Z",
  "end": "2017-06-01T07:26:27.020Z"
}, {
  "id": 5,
  "name": "rahul",
  "start": "2017-06-01T04:19:19.302Z",
  "end": "2017-06-01T04:19:19.302Z"
}, {
  "id": 6,
  "name": "neha",
  "start": "2017-06-05T08:21:30.519Z",
  "end": "2017-06-05T08:21:30.519Z"
}, {
  "id": 7,
  "name": "santosh",
  "start": "2017-06-06T12:33:34.094Z",
  "end": "2017-06-06T12:33:34.094Z"
}, {
  "id": 8,
  "name": "sagar",
  "start": "2017-06-06T19:08:51.789Z",
  "end": "2017-06-06T19:08:51.789Z"
}, {
  "id": 9,
  "name": "poonam",
  "start": "2017-06-04T12:53:06.477Z",
  "end": "2017-06-04T12:53:06.477Z"
}, {
  "id": 10,
  "name": "rukmani",
  "start": "2017-05-31T08:13:58.232Z",
  "end": "2017-05-31T08:13:58.232Z"
}]`
);

const datediff = new moment(new Date()).diff(
  new moment('2017-06-01T18:23:07.322Z'),
  'days'
);
events.forEach((event, index) => {
  events[index].start = new moment(event.start).add(datediff, 'days').toDate();
  events[index].end = new moment(event.end).add(datediff, 'days').toDate();
});
export default events;
