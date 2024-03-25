import { RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx';

const RouterCustomProvider = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default RouterCustomProvider