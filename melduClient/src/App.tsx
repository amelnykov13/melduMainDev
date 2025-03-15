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
import OtherAccount from './main_pages/OtherAccount'
import Search from './main_pages/Search'
import Education from './main_pages/Education'
import Settings from './sub_pages/Settings'
import Account from './main_pages/Account'
import Notifications from './main_pages/Notifications'
import AdditionalRegisterInfo from './sub_pages/AdditionalRegistreInfo'


//Our environment variables
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const ENV = import.meta.env.VITE_ENV

const childr = [
  {path: 'home', element: <HomePage/>},
  {path: 'account', element: <Account/>},
  {path: 'search', element: <Search/>},
  {path: 'search/:searchArgs', element: <Search/>}, //But this one is with a loader already
  {path: 'education', element: <Education/>},
  {path: 'settings', element: <Settings/>},
  {path: 'account/:username', element: <OtherAccount/>},
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
  { path: '/register/addinfo', element: <AdditionalRegisterInfo/> },
  { path: '/', element: <TypeSelection/> },
  { path: '*', element: <ErrorPage/>}
])

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchMSG = async () => {
      try {
          const response = await axios.get(`${SERVER_URL}`);
          setMessage(response.data.message);
          console.log(message)
        } catch (err) {
          console.log(err)
          setError((err as Error).message)
        }
      };
      fetchMSG();
    }, [SERVER_URL]);
  
  return (
    <div>
      {error && <p>{ error }</p>}
      {message && <p>{ message }</p>}
      <RouterProvider router={router}/>
      <footer>{ENV === 'production' ? 'Production Mode' : 'Development Mode'}</footer>
    </div>
  )
}

export default App
