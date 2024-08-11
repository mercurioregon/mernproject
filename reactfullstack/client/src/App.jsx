import "./App.css"
import {Outlet} from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  CreateHttpLink,

} from "@apollo/client"

import {setContext} from "@apollo/client/link/context"
const backendLink = CreateHttpLink({uri:"/graphql"})
const auth = setContext((_, {headers})=>{
  const token= localStorage.getItem("id_token")
  return{
    headers:{
      ...headers,
      authorization: token? `Bearer ${token}`: ``
    }
  }
})


const client = new ApolloClient({
  link: auth.concat(backendLink)

})
function App() {
  return (
    <ApolloProvider client = {client}>

    </ApolloProvider>
    

  )
}