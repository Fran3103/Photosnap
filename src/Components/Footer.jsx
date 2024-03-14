import { Link } from "react-router-dom"
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'
import logo from '../assets/shared/desktop/logo2.svg'
import '../../src/App.css'

const Footer = () => {
  return (
    <>
    <div className="bg-black w-full">
        <div className="w-full max-w-[1110px] bg-black flex flex-col justify-center items-center m-auto p-5 text-white py-10 gap-12  md:flex-row md:h-[290px] xl:h-[240px] md:items-start md:justify-between md:px-12" >
            <div className=" flex flex-col gap-8 md:grid grid-cols-1 grid-rows-3  md:justify-items-start md:gap-4 md:mt-6   xl:grid-cols-2 xl:gap-20  h-full xl:w-[450px]">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="flex justify-between px-4 md:row-start-3 w-full md:px-0  md:w-40 ">
                <Link>
                    <span className="svg svg-facebook"></span>
                </Link>
                <Link>
                        <span className="svg svg-youtube"></span>
                </Link>
                <Link>
                        <span className="svg svg-twitter"></span>
                </Link>
                <Link>
                        <span className="svg svg-pinteres"></span>
                </Link>
                <Link>
                        <span className="svg svg-instagram"></span>
                
                </Link>
                </div>
                <div className="h-full w-full xl:row-start-1 xl:row-end-3 xl:col-start-2 ">
                <ul className="flex flex-col justify-center items-center gap-4 font-semibold tracking-widest text-xs md:justify-start md:row-start-2 md:flex-row xl:col-start-2 xl:row-start-1  xl:flex-col xl:justify-between xl:row-end-3 xl:h-[170px] xl:text-base xl:px-2 xl:items-start ">
                        <li><Link to='/' className="hover:text-grey">HOME</Link></li>
                        <li><Link to='stories' className="hover:text-grey">STORIES</Link></li>
                        <li><Link to='features' className="hover:text-grey">FEATURES</Link></li>
                        <li><Link to='pricing' className="hover:text-grey">PRICING</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-12 mt-7 md:items-end md:justify-between h-full xl:w-72">
            
                    <Link className="hover:text-grey flex justify-between h-2 items-center gap-6">
                        <button className="p-2 hover:text-grey bg-black w-full text-white uppercase tracking-widest">Get an invite</button>
                        <img src={arrow2} alt="arrow" className='cursor-pointer ' />
                    </Link>
        
                <p className="text-grey">Copyright 2019. All Rights Reserved</p>
                
            
            </div>
            
        </div>
    </div>
    <div className="flex flex-col items-center gap-3 bg-black md:flex-row justify-center py-6">
                
                    <p className="text-xs text-grey">Proyecto obtenido de <Link to='https://www.frontendmentor.io/home'><span  className="hover:text-white">FrontEnd Mentor</span></Link></p>
                    <p className="text-xs text-grey">Realizado por <Link to='https://www.linkedin.com/in/franco-aguirre-24855012a'><span className="hover:text-white">Franco Aguirre</span></Link></p>
                
            </div>
    </>
  )
}

export default Footer