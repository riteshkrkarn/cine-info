// import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';
import TvSeries from './components/TvSeries';
import Navbar from './components/Navbar';

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
        path: "/",
        element:(
          <div>
            <Navbar/>
            <Home/>
          </div>
        )
    },
    {
        path: '/now-playing',
        element: (
          <div>
            <Navbar/>
            <NowPlaying/>
          </div>
        )
    },
    {
        path: '/popular',
        element: (
          <div>
            <Navbar/>
            <Popular/>
          </div>
        )
    },
    {
        path: '/tv-series',
        element: (
          <div>
            <Navbar/>
            <TvSeries/>
          </div>
        )
    }
])

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      
    </>
  )
}

export default App
