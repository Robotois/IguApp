import { UPDATE_DEVICE } from '../../apollo/local/queries';

export const setDevice = (iguId, active) => {
  const topic = `${iguId}/shadow/update`;
  const jsonState = {
    desired: {
      digitalIo: {
        relay: active,
      },
    },
  };
  // console.log('Shadow update:', topic);
  window.client.publish(topic, JSON.stringify(jsonState), { qos: 1 });
};

export const deviceSubscriber = (iguId) => {
  const topic = `${iguId}/shadow/update/accepted`;
  window.client.subscribe(topic, { qos: 1 });
};

export const deviceListener = (apolloClient) => {
  window.client.on('message', (topic, message) => {
    // console.log('MQTT Message:', topic, message.toString());
    const jsonState = JSON.parse(message.toString());
    const { reported } = jsonState;
    if (reported && reported.digitalIo) {
      const iguId = topic.split('/')[0];
      apolloClient.mutate({
        mutation: UPDATE_DEVICE,
        variables: {
          iguId,
          active: reported.digitalIo.relay,
        },
      });
    }
  });
};
