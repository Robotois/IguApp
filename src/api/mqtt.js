import { Client, Message } from 'react-native-paho-mqtt';

//Set up an in-memory alternative to global localStorage
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
};
let connected = false;

// Create a client instance
const client = new Client({ uri: 'ws://192.168.1.68:1884/', clientId: 'IguApp', storage: myStorage });

const connectionLost = (responseObject) => {
  if (responseObject.errorCode !== 0) {
    alert('Dispositivo desconectado:', responseObject.errorMessage);
    connected = false;
  }
};

// set event handlers
client.on('connectionLost', connectionLost);
// client.on('messageReceived', (message) => {
//   alert(message.payloadString);
// });

// connect the client
client.connect()
  .then(() => {
    // Once a connection has been made, make a subscription and send a message.
    // alert('connected');
    // return client.subscribe('World');
    connected = true;
    client.subscribe(`Igu/switch1/update/accepted`);
    client.subscribe(`Igu/switch2/update/accepted`);
  })
  // .then(() => {
  //   const message = new Message('Hello');
  //   message.destinationName = 'World';
  //   client.send(message);
  // })
  .catch(connectionLost);

const setSwitch = (number, state) => connected && client.send(`Igu/switch${number}/update`, `${state}`, 1);

export const getSwitch = number => connected && client.send(`Igu/switch${number}/get`, '', 1);

export const updateSwitch = (number, callback) => {
  client.on('messageReceived', (message) => {
    if (message.destinationName === `Igu/switch${number}/update/accepted`) {
      callback(parseInt(message.payloadString, 10));
    }
    console.log(message);
  });
};

export default setSwitch;
