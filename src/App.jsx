import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ResponsiveDrawer from "./componenets/ResponsiveDrawer";
import TaskOne from "./page/task-one/TaskOne";
import TaskTwo from "./page/task-two/TaskTwo";
import SinglPage from "./componenets/singl-page/SinglPage";



const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ResponsiveDrawer/>}>
        <Route path="/" element={<TaskOne/>}/>
        <Route path="/tasktwo" element={<TaskTwo/>}/>
        <Route path="/singlpage/:id" element={<SinglPage/>}/>
      </Route>
      
    )
  );
  return <RouterProvider router={routes} />;
};

export default App;
