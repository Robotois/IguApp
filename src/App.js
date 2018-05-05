import React from 'react';
import { ApolloClient } from 'apollo-client';
// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import Routes from './routes/routes';

import { resolvers, typeDefs, defaults } from './apollo/local';
import mainDataFetch from './containers/main-data-fetch';
import './api/mqtt';

const cache = new InMemoryCache();
// const client = new ApolloClient({
//   cache,
//   uri: 'http://192.168.1.68:3000/graphql',
//   link: withClientState({
//     cache,
//     defaults,
//     resolvers,
//     typeDefs,
//   }),
// });

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
    withClientState({
      resolvers, defaults, cache, typeDefs,
    }),
    new HttpLink({
      uri: 'http://192.168.1.65:3000/graphql',
      credentials: 'same-origin',
    }),
  ]),
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
    {mainDataFetch()}
  </ApolloProvider>
);

export default App;
