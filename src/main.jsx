import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import App from './App'
import { Home } from './components/Home'
import { TrailList } from './components/TrailList'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Equipment } from './components/Equipment'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'traillist', Component: TrailList },
      { path: 'gallery', Component: Gallery },
      { path: 'equipment', Component: Equipment },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
