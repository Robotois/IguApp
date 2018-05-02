/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { ApolloClient } from 'apollo-client';
// import ApolloClient from 'apollo-boost';
// import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';

import cache from './apollo/cache';
// import typeDefs from './apollo/TypeDefs';
// import resolvers from './apollo/Resolvers';
// import defaults from './apollo/defaults';

import Routes from './routes/routes';
import './api/mqtt2';

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    // withClientState({
    //   resolvers, defaults, cache, typeDefs,
    // }),
    new HttpLink({
      uri: 'http://192.168.1.72:3000/graphql',
      credentials: 'same-origin',
    }),
  ]),
});

// const client = new ApolloClient({
//   uri: 'http://192.168.1.72/graphql'
// });

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
