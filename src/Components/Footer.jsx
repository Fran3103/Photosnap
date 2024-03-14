import { Link } from "react-router-dom"
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'

import face from '../assets/shared/desktop/facebook.svg'
import youtube from '../assets/shared/desktop/youtube2.svg'
import tw from '../assets/shared/desktop/twitter.svg'
import pinterest from '../assets/shared/desktop/pinterest.svg'
import insta from '../assets/shared/desktop/instagram.svg'
import logo from '../assets/shared/desktop/logo2.svg'
import '../../src/App.css'

const Footer = () => {
  return (
    <div className="w-full bg-black flex flex-col justify-center items-center m-auto p-5 text-white">
        <div>
            <img src={logo} alt="logo" />
            <div>
               <Link>
                    <img src={face} alt="redes" />
               </Link>
               <Link>
                    <img src={youtube} alt="redes" />
               </Link>
               <Link>
                    <img src={tw} alt="redes" />
               </Link>
               <Link>
                    <img src={pinterest} alt="redes" className="svg" />
               </Link>
               <Link>
                    <span className="svg svg-icono"></span>
            
               </Link>
            </div>
            <div>
            <ul className="flex flex-col justify-center items-center gap-4 font-semibold tracking-widest">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='stories'>STORIES</Link></li>
                    <li><Link to='features'>FEATURES</Link></li>
                    <li><Link to='pricing'>PRICING</Link></li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <button className="p-2  bg-black w-full text-white uppercase tracking-widest">Get an invite</button>
                <img src={arrow2} alt="arrow" className='cursor-pointer ' />
            </div>
            <p>Copyright 2019. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer