import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./contexts/CurrentUserContextProvider.jsx";
import PostProvider from "./contexts/PostProvider.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <PostProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PostProvider>
  </UserContextProvider>
=======
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
>>>>>>> mathewBranch
);
