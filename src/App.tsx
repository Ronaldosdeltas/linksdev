import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Networks } from './pages/networks'
import { Contact } from './pages/contact/contact.tsx'
import { Layout } from './components/layout/layout.tsx'



const router = createBrowserRouter([
  {
 
       element: <Layout />,
        children: [{

          path: '/',
          element: <Home />
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/admin/socialmidia',
          element: <Networks />
        },  {
        path: 'contact/',
        element: <Contact />,
    },
      ]
  }
])

export { router };
