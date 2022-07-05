import React from "react";
import {  useNavigate } from 'react-router-dom'
import RedirectAuth from "./redirectIfAuth"
import TextInput from "./components/textInput"
import Button from "./components/button"
import check from './assets/check.png';

const CreateAccount = ({setIndexStep}:any) => {
    const navigate = useNavigate()



    const [step, setStep] = React.useState<boolean>(false)
    const [formvalue, setformvalue] = React.useState<number>(0)
    const [menuList, setmenuList] = React.useState<any>([
        {title: `I have a registered business / charity with CAC`, selected:true,subTitle: 'As a registered business you’ll get:', titleList: [
            'Account in your business name', 'Send to and receive transfers from all Nigerian banks', 'Tools for business management'
        ]},
        {title: `My business is not yet registered, I would like to register`,selected:false, subTitle: 'Everything you need to start your business:', titleList: [
            'Registered business name with the CAC', 'Tax identification number', 'Your account will be automatically opened on completion'
        ]},
        {title: `I’m a freelancer I do business in my personal name`, selected:false, subTitle: 'As a registered business you’ll get:', titleList: [
            'Account in your business name', 'Send to and receive transfers from all Nigerian banks', 'Tools for business management'
        ]}
    ])

       

    const handleChange = React.useCallback((e: any, index: number) => {
        menuList.map((menu: any) => menu.selected = false)
        menuList[index].selected = true;
        setformvalue(index)
    }, [menuList])

    const handleSubmit =() => {
        sessionStorage.setItem('auth', 'true');
        navigate('/dashboard')
    }


    return (
        <>

      <div className='main m-8'>
         
         <div className={`flex flex-col justify-center ${!step ? 'login-cont' : 'login-cont-2'}`}>
         {!step ? 
           <>
            <div className="title">Create your account</div>
            <div className="subtitle">A short description about account types</div>
            <TextInput labelStyle={'my-3'} type="text" placeholder="Enter first name" label="First name"/>
            <TextInput labelStyle={'my-3'} type="text" placeholder="Enter last name" label="Last name"/>
            <div className="flex justify-between my-3 w-full">
                <TextInput type="text" value={'+234'} labelStyle={'mr-4'} inputClass={'20%'} placeholder="Country" label="Country"/>
                <TextInput type="text" inputClass={'80%'} placeholder="Enter mobile number" label="Mobile number"/>
            </div>
            <TextInput labelStyle={'my-3'} type="text" placeholder="Enter email address" label="Email address"/>
            <Button className={'btn w-full py-3 mt-4 rounded'} onClick={() => {setStep(!step);}} text="Next"/>
        </> :
        <>
        <div className="title">Open a new business account</div>
        <div className="subtitle">A short description comes here</div>
            <ul>
                {menuList.map((menu: any, index: number) => (
                    <li className={`${(index === formvalue) ? 'openList' : 'listShadow'} rounded px-6 py-2 my-4`} key={index}>
                     <label className="">
                        <div className="flex">
                            <input className="mr-4" onChange={(e) => handleChange(e, index)} type="radio" name="menu" checked={index === formvalue}/>
                            <div className="text-base openListTitle">{menu.title}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mr-8"></div>
                                <div>
                            {menu.selected && <>
                                <div className="openListSubTitle">{menu.subTitle}</div>
                                <ul className="mt-3">
                                    {menu.titleList.map((mu: string, index:number) =>(
                                        <li key={index} className="flex my-3">
                                            <div className="mr-5">
                                            <img src={check} alt="check" />
                                            </div>
                                            <div className="openListSubTitle">{mu}</div>
                                        </li>
                                    ))}
                                </ul>
                            </>}
                            </div>
                        </div>
                     </label>
                    </li>
                ))}
            </ul>
            <Button className={'btn w-full py-3 mt-4 rounded'} onClick={() => handleSubmit()}  text="Next"/>
        </>
        }
        </div> 
      </div>


      
        </>
    )
}

export default RedirectAuth(CreateAccount);