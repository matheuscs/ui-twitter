import { createBrowserRouter } from "react-router-dom";
import { Timeline } from './pages/Timeline'
import { OpenMeow } from "./pages/OpenMeow";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default/ >,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/meow',
        element: <OpenMeow />
      }
    ]
  }
],
{
  basename: "/ui-twitter",
})