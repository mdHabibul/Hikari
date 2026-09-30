import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "@tanstack/react-router";
import router from './router.jsx'
import './index.css'
import GramApi from './gramApi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <GramApi />
  </StrictMode>,
)
