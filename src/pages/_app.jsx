import 'focus-visible'
import '@/styles/tailwind.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

export default function App({ Component, pageProps }) {
  return (
    <PayPalScriptProvider 
      options={{ 
        "client-id": "AZ12o1PlLp-zLsiqR0bMp5PIqJ4a5EN3kExu7IUJ5mjp8nbBrI9JMz8L3q4Wjh_tgMtgVqC7U0mTWiGc",
        components: "buttons",
        currency: "USD"
      }}
    >
      <Component {...pageProps} />
    </PayPalScriptProvider>
  )
}
