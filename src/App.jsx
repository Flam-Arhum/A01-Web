import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from "./Portfolio";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);


function App() {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  );
}

export default App;