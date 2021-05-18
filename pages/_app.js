import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import "../styles/globals.css";

const setRem = async () => {
  await require("../util/flexible");
};

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    setRem();
    window.addEventListener("resize", setRem);
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
