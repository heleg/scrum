import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { History } from 'history';

import Login from './Login';
import Index from './Index';
import { history } from '../../index';

const httpLink = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin',
});

const link = onError(({ graphQLErrors }) => {
  if (graphQLErrors[0]?.extensions?.exception?.status === 403) {
    history.push('/login?status=403');
  }
});

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
  link: concat(link, httpLink),
});

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
