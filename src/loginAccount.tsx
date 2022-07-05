import RedirectAuth from "./redirectIfAuth"
import {  useNavigate } from 'react-router-dom'
import TextInput from "./components/textInput"
import Button from "./components/button"


const LoginAccount = () => {
    const navigate = useNavigate()

    const handleSubmit =() => {
        sessionStorage.setItem('auth', 'true');
        navigate('/dashboard')

    }
    return (
     
      <div className='main'>
         
         <div className='flex flex-col justify-center login-cont'>
           <div className="title">Welcome back to Prospa</div>
           <div className="subtitle">An account, with powerful, personalised tools<br/>all in one place</div>
           <div className="my-8 flex flex-col">
              <TextInput labelStyle={'my-3'} type="text" placeholder="Enter email address" label="Email address"/>
              <TextInput labelStyle={'my-3'} type="password" placeholder="Enter password " label="Password"/>
           </div>
           <Button className={'btn w-full py-3 rounded'} onClick={() => handleSubmit()} text="Next"/>
        </div> 
      </div>
    )
}

export default RedirectAuth(LoginAccount)