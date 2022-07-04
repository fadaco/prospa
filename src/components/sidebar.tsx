import img from '../assets/img.png';
import logo from '../assets/logo.png';
import menu1 from '../assets/menu-1.png';
import menu2 from '../assets/menu-2.png'
import {useLocation} from 'react-router-dom';
import React from 'react';
import arrowDown from '../assets/arrow_down.png';



const Sidebar = ({indexStep}: any) => {
    const location = useLocation();
    const [flyOut, setFlyOut] = React.useState<boolean>(false)
    const auth = sessionStorage.getItem('auth');
    const [indexNo, setIndexNo] = React.useState<number>(0)
    const menuListing = [
        {name: 'Dashboard', image: menu1},
        {name: 'Invoice', image: menu2},
        {name: 'Management', image: menu1},
        {name: 'Security', image: menu2},
        {name: 'Support', image: menu1}
    ];

    const [businessNames, setBusinessNames] = React.useState<any>([
        {title: 'Clayvant Inc', default: true},
        {title: 'Business 2', default: false},
        {title: 'Business 3', default: false},
    ])

    const handleDefaultChange = (index: number) => {
        const tmp = [...businessNames];
         tmp.map((business: any) => business.default = false)
        tmp[index].default = true;
        setBusinessNames(tmp)

        setTimeout(() => {setFlyOut(false)}, 2000)

    }

    return (
        <>
        {!auth ?
        <div style={{backgroundColor: location.pathname === '/create-account' ? '#7E51FF' : '#1d1335'}} className='sidebar flex flex-col hidden md:table'>
            <div className='m-8'>
                <img src={logo} alt="logo"/>
            </div>


            <ul className='flex m-8'>
                {Array.from([1,2,3,4,5]).map((_, index) => (
                <li key={index} style={{opacity: (index === indexNo) ? 1 : 0.5}} className='extra'></li>
                ))}
            </ul>

            <div className='text-3xl ml-8'>Create multiple<br/> sub-account</div>
            <div className='ml-8'>Organise your business finances easily<br/> with multiple accounts. No limits!</div>

            <div className='my-20  ml-8'>
                <img src={img} alt={'pic'}/>
            </div>

           
            <footer className='ml-8'>© 2020 Prospa Inc</footer>
        </div>: 
        
        <div className='sidebar-2 flex flex-col hidden md:table'>
            <div className='px-8 py-4 flex justify-between items-center sidebar-cont relative'>
               <div className='flex'>
               <div className='mr-5 menu-b'>BN</div>
                <div>
                    <div className='openListTitle text-base'>{businessNames.filter((business: any) => business.default)[0].title}</div>
                    <div className='text-color-s text-xs'>Manage account</div>
                </div>
               </div>
                <div onClick={() => setFlyOut(!flyOut)} className='arrow-bg w-10 h-10 flex items-center justify-center cursor-pointer'><img width={'16px'} height={'8.8px'} src={arrowDown} alt='arrow_down'/></div>
                { flyOut && <ul className='absolute menu-flyout'>
                    {businessNames.map((businessName: any, index: number) => (
                        <li key={index} onClick={() => handleDefaultChange(index)} className={`p-3 cursor-pointer ${businessName.default ? 'openListTitle' : 'openListSubTitle'}`}>{businessName.title}</li>
                    ))}
                    <li className='text-color flyadd p-3'>Add a business</li>
                </ul>}
            </div>
            <ul className='m-8'>
               {menuListing.map((menu: any, index: number) => (
                <li className='flex my-8' key={index}>
                    <img src={menu.image} alt={menu.name} className='mr-5'/>
                    <div className='text-sm'>{menu.name}</div>
                </li>
               ))}
            </ul>

        </div>
        }
        </>
    )
}

export default Sidebar;