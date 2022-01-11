import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"

export default function Application({ Component, pageProps }) {

  return (
    <>
       <ApolloProvider client={client}>
        <Component {...pageProps} />
        </ApolloProvider>
    </>
  )
}
