import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./../app/store";
import "./../app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}