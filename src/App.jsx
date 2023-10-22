import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Update from "./components/Update";
import MainLayout from "./layout/MainLayout";
import Create from "./components/Create";
import Home from "./components/Home";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
