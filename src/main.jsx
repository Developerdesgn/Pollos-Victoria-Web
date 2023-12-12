import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Root from '../Root.jsx';
import Second from './pages/Second.jsx';
import Third from './pages/Third.jsx';
import Fourth from './pages/Fourth.jsx';
import Fifth from './pages/Fifth.jsx';
import Modal from './components/Modal.jsx';
import LoginModal from './components/LoginModal.jsx';
import Signup from './components/Signup.jsx';
import Forget from './components/Forget.jsx';
import Personalize from './pages/Personalize.jsx';
import Pedidos from './pages/Pedidos.jsx';
import Metados from './pages/Metados.jsx';
import Metados1 from './pages/Metados1.jsx';
import Metados2 from './pages/Metados2.jsx';
import Ubicaciones from './pages/Ubicaciones.jsx';
import Ubicaciones1 from './pages/Ubicaciones1.jsx';
import Checking from './pages/Checking.jsx';
import Finali from './pages/Finali.jsx';
import Cancelation from './pages/Cancelation.jsx';
import OrderDetails from './pages/orderDetails.jsx';
import OrderCancelation from './pages/orderCancelation.jsx';
import Ubicaciones2 from './pages/Ubicaciones2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/second", element: <Second />
      },
      {
        path: "/third", element: <Third />
      },
      {
        path: "/fourth", element: <Fourth />
      },
      {
        path: "/fifth", element: <Fifth />
      },

      {
        path: "/pedidos", element: <Pedidos />
      },
      {
        path: "/Metados", element: <Metados />
      },
      {
        path: "/Metados1", element: <Metados1 />
      },
      {
        path: "/Metados2", element: <Metados2 />
      },
      {
        path: "/Ubicaciones", element: <Ubicaciones />
      },
      {
        path: "/Ubicaciones1", element: <Ubicaciones1 />
      },
      {
        path: "/finali", element: <Finali />
      },
      {
        path: "/cancelation", element: <Cancelation />
      },
      {
        path: "/order-details", element: <OrderDetails />
      },
      {
        path: "/order-cancelation", element: <OrderCancelation />
      },
      { path: "/checking", element: <Checking /> },
      {
        path: "/personalize", element: <Personalize />
      },
      {
        path: "/Ubicaciones2", element: <Ubicaciones2 />
      },

    ]
  },
  ,
  {
    path: "/modal", element: <Modal />
  },
  {
    path: "/login", element: <LoginModal />
  },
  {
    path: "/signup", element: <Signup />
  },
  {
    path: "/forget", element: <Forget />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

{/* <Forget /> */ }
{/* <Personalize /> */ }
{/* <Pedidos /> */ }
{/* <Metados /> */ }
{/* <Metados1 /> */ }
{/* <Metados2 /> */ }
{/* <Ubicaciones /> */ }
{/* <Ubicaciones1 /> */ }