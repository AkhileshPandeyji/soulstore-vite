import React from "react";
import App from "./App";
import { Helmet } from "react-helmet";
import ReactDomServer from "react-dom/server";

export function render() {
  const appHtml = ReactDomServer.renderToString(<React.StrictMode><App /></React.StrictMode>);
  // SSR implementation for the helmet
  const helmet = Helmet.renderStatic();
  const head = [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()].join("")
  return {
    html: appHtml,
    head,
  }
}