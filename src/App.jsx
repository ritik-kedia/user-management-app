import React from 'react'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },

    {
      path: "/user/:id",
      element: <UserPage />
    }
  ])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App