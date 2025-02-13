import { createBrowserRouter } from "react-router-dom";
import { Timeline } from './pages/Timeline'
import { OpenMeow } from "./pages/OpenMeow";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />
  },
  {
    path: '/meow',
    element: <OpenMeow />
  }
])