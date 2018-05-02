import mqtt from 'mqtt/dist/mqtt-browser';

const client = mqtt.connect({ host: '192.168.1.66', port: 1884, clientId: 'IguApp' });

client.on('connect', function () {
  alert('connected');
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt');
  setTimeout(() => {
    client.end();
  }, 5000);
});

// client.on('message', function (topic, message) {
//   // message is Buffer
//   // alert(message.toString())
//   client.end()
// })
