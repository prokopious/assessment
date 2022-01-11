import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://blooming-island-13363.herokuapp.com/",
  cache: new InMemoryCache(),
})

export default client