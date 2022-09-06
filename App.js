import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import MercyshipContextProvider from "./context/MercyshipContext"

function App() {
  return(
    <ApolloProvider>
    <App/>

    </ApolloProvider>

  )
}

export default App;
