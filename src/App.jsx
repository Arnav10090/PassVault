import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import About from './components/About'
import SavedPasswords from './components/SavedPasswords'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><><Navbar/><Manager/></><Footer/></>
    },
    {
      path:"/trynow",
      element: <><><Navbar/><SavedPasswords/></><Footer/></>
    },
    {
    path:"/About",
    element: <><><Navbar/><About/></><Footer/></>
    }
  ]); 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
