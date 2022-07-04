import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  NavLink
} from "react-router-dom";
import './App.css';
import CreateAccount from './createAccount';
import LoginAccount from './loginAccount';
import Dashboard from './dashboard';
import Sidebar from './components/sidebar';
import profilep from './assets/profile-p.png';
import alertp from './assets/alert-p.png';


function App() {
  const [indexStep, setIndexStep] = React.useState<number>(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<MainPage indexStep={indexStep}/>}>
      <Route index element={<LoginAccount />} />
      <Route path="create-account" element={<CreateAccount {...setIndexStep}/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

function MainPage ({indexStep}: any) {
  const location = useLocation();
  const auth = sessionStorage.getItem('auth')

  return (
    <div className="App flex">
        <Sidebar {...indexStep}/>
        <div className={`${auth ? 'main-2 main-bg' : 'main m-8' }`}>
            <div className={`flex justify-between ${auth ? 'topbar items-center px-12' : ''}`}>
              {auth ? <div className='text-color-s titled'>Dashboard</div> : <div></div>}
             {!auth ? (location.pathname === '/create-account' ?<div className='text-sm '>Already a member? <NavLink className={'text-color'} to={'/'}>Sign In</NavLink></div> : <div className='text-sm'>Don’t have an account? <NavLink className={'text-color'} to={'/create-account'}>Sign Up</NavLink></div>) : <div className='flex'>
             <div><img className='mr-5' src={alertp} alt="notification"/></div>
              <div><img src={profilep} alt="profile"/></div>
              </div>}
            </div>
           <div className={` ${auth ? 'dashboard-bg' : 'flex flex-col justify-center items-center mt-16'}`}>
          <Outlet/>
          </div> 
        </div>
      </div>
  )
}

export default App;
