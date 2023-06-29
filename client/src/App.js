import "../src/App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./Routes/routes";
import { UserContextProvider } from "./Context/UserContext";

const routes = createBrowserRouter(ROUTES);


function App() {
  return (
   <>
  <UserContextProvider>
  <RouterProvider router={routes}/>

  </UserContextProvider>
   </>
  );
}

export default App;
