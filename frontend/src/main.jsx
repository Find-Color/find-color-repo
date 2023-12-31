import ReactDOM from "react-dom/client";
import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./contexts/CurrentUserContextProvider.jsx";
import PostProvider from "./contexts/PostProvider.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserContextProvider>
      <PostProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostProvider>
    </UserContextProvider>
  </ThemeProvider>
);
