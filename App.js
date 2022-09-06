import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import MercyshipContextProvider from "./context/MercyshipContext"

function App() {
  return(
    <ApolloProvider>
    <MercyshipContextProvider>
      <ApolloClient>
          <InMemoryCache>
             <App>

             </App>
          </InMemoryCache>
        </ApolloClient>
     </MercyshipContextProvider>
    </ApolloProvider>

  )
}

export default App;
