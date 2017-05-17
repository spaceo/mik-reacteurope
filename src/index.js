import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

// TODO import from apollo-client, react-apollo and inject the client via ApolloProvider
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={Recipes} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
