import { Link } from "react-router-dom"
import menu from '../assets/shared/mobile/menu.svg'
import closeMenu from '../assets/shared/mobile/close.svg'
import logo from '../assets/shared/desktop/logo.svg'
import { useState } from "react"

const Navbar = () => {

    const [activo, setActivo] = useState(false)

    const onClick = ()=> setActivo(!activo)


  return (
    <div className="w-full h-16 bg-white m-auto md:h-20 relative z-50">
        <div className="max-w-[1440px] m-auto flex justify-between w-full p-5 md:p-6 relative md:items-center md:gap-12 xl:px-40 ">
            <Link to='/'><img src={logo} onClick={onClick} alt="logo" className="w-48 h-5"/></Link>
            <img src={menu} alt="menu" className={activo ?'hidden': 'flex cursor-pointer md:hidden'}  onClick={onClick}  />
            <img src={closeMenu} alt="close menu" className={activo ?'flex cursor-pointer': 'hidden'} onClick={onClick} />
            <div className={activo ?'flex w-full absolute duration-300 transition-all ease-linear mt-11 p-2 px-5 flex-col left-0 justify-center items-center gap-4 pb-12 bg-white': 'hidden duration-300 transition-all ease-linear '} >
                <ul className="flex flex-col justify-center items-center gap-4 font-semibold tracking-widest">
                    <li><Link to='stories' onClick={onClick} >STORIES</Link></li>
                    <li><Link to='features' onClick={onClick} >FEATURES</Link></li>
                    <li><Link to='pricing' onClick={onClick} >PRICING</Link></li>
                </ul>
                <hr className="w-full h-[1px] m-auto" />
                <button className="p-2  bg-black w-full text-white uppercase tracking-widest">Get an invite</button>
            </div>
            <ul className="hidden md:flex justify-center items-center w-full gap-8 xl:gap-12 font-semibold tracking-widest">
                    <li><Link to='stories' onClick={onClick}  className="cursor-pointer hover:text-grey">STORIES</Link></li>
                    <li><Link to='features' onClick={onClick}  className="cursor-pointer hover:text-grey">FEATURES</Link></li>
                    <li><Link to='pricing'  onClick={onClick} className="cursor-pointer hover:text-grey">PRICING</Link></li>
            </ul>
            <button className="hidden md:block w-60 bg-black py-2  text-[10px] xl:text-base xl:py-3 xl:w-80  hover:bg-grey hover:text-black text-white uppercase tracking-widest">Get an invite</button>
        </div>
    </div>
  )
}

export default Navbar