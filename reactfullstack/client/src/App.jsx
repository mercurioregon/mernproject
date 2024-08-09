import "./App.css"
import {Outlet} from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  CreateHttpLink,

} from "@apollo/client"

import {setContext} from "@apollo/client/link/context"