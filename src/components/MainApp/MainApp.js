import React from 'react';

import { ApolloClient } from 'apollo-client';
// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import AppStack from '../../routes';
import LoadScreen from './LoadScreen';

import { resolvers, typeDefs, defaults } from '../../apollo/local';
import mainDataFetch from '../../containers/main-data-fetch';
import mqttConnect from '../../api/mqtt';
import getConnected from '../../api/device-finder';

const cache = new InMemoryCache();

const getClient = toiIp => new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    withClientState({
      resolvers, defaults, cache, typeDefs,
    }),
    new HttpLink({
      uri: `http://${toiIp}:8082/graphql`,
      credentials: 'same-origin',
    }),
  ]),
});


// const fetcher = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('192.168.1.72');
//   }, 3000);
// });

const MainApp = ({ toiIp }) => {
  const client = getClient(toiIp);
  mqttConnect(toiIp);
  return (
    <ApolloProvider client={client} >
      <AppStack />
      {mainDataFetch()}
    </ApolloProvider>
  );
};

class RootComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      superToi: false,
      fetching: false,
    };
    this.deviceFetch = this.deviceFetch.bind(this);
  }

  deviceFetch() {
    this.setState({ fetching: true });
    return getConnected()
      .then((connected) => {
        if (connected.length !== 0) {
          this.setState({ superToi: connected[0], fetching: false });
        } else {
          this.setState({ fetching: false });
        }
      });
  }

  render() {
    const { superToi, fetching } = this.state;
    if (!superToi) {
      return (
        <LoadScreen fetching={fetching} deviceFetch={this.deviceFetch} />
      );
    }
    return (
      <MainApp toiIp={superToi.ip} />
    );
  }
}

export default RootComponent;
