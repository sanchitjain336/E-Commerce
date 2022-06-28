import React from "react";
// import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

import { ToastProvider, useToasts } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        {/* <ToastProvider> */}
        <Component {...pageProps} />
        {/* </ToastProvider> */}
      </Layout>
    </StateContext>
  );
}

export default MyApp;
