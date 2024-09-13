import { hydrateRoot } from "react-dom/client";
import App from "./App";

const render = () =>
  hydrateRoot(document.getElementById("root"), <React.StrictMode><App /></React.StrictMode>);

export default render;