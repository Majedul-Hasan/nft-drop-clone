import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
    desiredChainId={ ChainId.Rinkeby }
    chainRpc={{ [ChainId.Rinkeby]  :'https://rinkeby.infura.io/v3/e656989154c944b3927d928c063e33eb'}}
    
    >
     <Component {...pageProps} />
    </ThirdwebProvider>
  )
 
}

export default MyApp
