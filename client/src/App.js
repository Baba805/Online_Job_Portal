import "../src/App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./Routes/routes";
import { UserContextProvider, AdminContextProvider } from "./Context/UserContext";
// import { AdminContextProvider } from "./Context/AdminContext";

const routes = createBrowserRouter(ROUTES);


function App() {
  return (
   <>
  <UserContextProvider>
  <AdminContextProvider>
  <RouterProvider router={routes}/>
  </AdminContextProvider>


  </UserContextProvider>

  
   </>
  );
}

export default App;
