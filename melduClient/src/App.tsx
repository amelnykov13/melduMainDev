import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'

import TypeSelection from './main_pages/TypeSelection'
import ErrorPage from './sub_pages/ErrorPage'
import MainRootLayoutS from './main_pages/MainRootLayoutS'
import MainRootLayoutT from './main_pages/MainRootLayoutT'
import Login from './sub_pages/Login'
import Chat from './main_pages/Chat'
import Register from './sub_pages/Register'


import HomePage from './main_pages/HomePage'
import Profile from './main_pages/Profile'
import Search from './main_pages/Search'
import Education from './main_pages/Education'
import Settings from './sub_pages/Settings'
import Account from './main_pages/Account'
import Notifications from './main_pages/Notifications'

const childr = [
  {path: 'home', element: <HomePage/>},
  {path: 'myprofile', element: <Profile/>},
  {path: 'search', element: <Search/>},
  {path: 'search/:searchArgs', element: <Search/>}, //But this one is with a loader already
  {path: 'education', element: <Education/>},
  {path: 'settings', element: <Settings/>},
  {path: 'profile/:username', element: <Account/>},
  {path: 'notifications', element: <Notifications/>},
  {path: 'chat', element: <Chat/>}
]

const router = createBrowserRouter([
  {
    path: '/s',
    element: <MainRootLayoutS/>,
    errorElement: <ErrorPage/>,
    children: [
      ...childr
    ]
  },
  {
    path: '/t',
    element: <MainRootLayoutT/>,
    errorElement: <ErrorPage/>,
    children: [
      ...childr
    ]
  },
  { path: '/login', element: <Login/> },
  { path: '/register', element: <Register/> },
  { path: '/', element: <TypeSelection/> },
  { path: '*', element: <ErrorPage/>}
])

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchMSG = async () => {
      try {
          const response = await axios.get('http://localhost:5050/');
          setMessage(response.data.message);
          console.log(message)
        } catch (err) {
          console.log(err)
          setError((err as Error).message)
        }
      };
      fetchMSG();
    }, []);
  
  return (
    <div>
      {error && <p>{ error }</p>}
      {message && <p>{ message }</p>}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
