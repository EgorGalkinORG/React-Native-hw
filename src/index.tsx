import { createRoot } from "react-dom/client";
import App from ".";

const rootContainer = document.getElementById("root") as HTMLElement;
const root = createRoot(rootContainer);
root.render(<App></App>);
