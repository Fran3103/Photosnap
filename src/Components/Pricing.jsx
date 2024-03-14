import heroMobile from '../../src/assets/pricing/mobile/hero.webp'
import heroTablet from '../../src/assets/pricing/tablet/hero.webp'
import heroDesktop from '../../src/assets/pricing/desktop/hero.webp'
import { Link } from 'react-router-dom'
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'
import { useState } from 'react'
export const Pricing = () => {

    
    const monthly = {
        'precio': [19.00, 39.00, 99.00],
        'tiempo': 'por month'
    }
    
    const yearly = {
        'precio': [190.00,390.00,990.00],
        'tiempo': 'por month'
    }
    
    const [plan, setPlan]= useState(monthly)
    const [select, setSelect] = useState(true )
    const cambioPlan = () =>{
        if(select === true){
            setPlan(yearly)
        }else if (select ===false){
            setPlan(monthly)
        }
        setSelect(!select)
    }
  return (
    <div className='w-full m-auto max-w-[1440px]'>

        <header className='w-full m-auto flex flex-col  md:flex-row-reverse '>
             <img src={heroMobile} alt="Mobile" className='md:hidden'/>
             <img src={heroTablet} alt="Tablet" className='hidden md:flex lg:hidden'/>
             <img src={heroDesktop} alt="Desktop" className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div className='w-full bg-black text-white flex flex-col gap-12 p-5 pb-12 relative md:justify-center md:px-12 '>
                <div className='absolute gradiente  w-40 h-2 top-0 mb-12  md:h-48 md:w-1 md:top-40 md:left-0 lg:top-24 xl:top-40 md:mb-0'></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8'>
                    <h1 className='text-3xl uppercase tracking-widest font-medium mr-12 md:text-4xl'>PRICING </h1>
                    <p className='text-grey text-base mr-5 text-left md:mr-1 leading-[1.7rem]  lg:mr-12 xl:mr-28 '>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                    
                </div>
             </div>
        </header>

         <div className='flex flex-col justify-center items-center p-5 py-12'>
            <div className='flex items-center justify-center gap-5 w-full'>
                <p className={select ? 'text-black font-semibold':'text-grey font-semibold'}>Monthly</p>
                <div className={select ? 'bg-grey w-16 h-8  rounded-full relative p-2 duration-500 ease-in-out' : 'bg-black w-16 h-8 rounded-full relative p-2 ease-in-out duration-500'}> <div className={select ? 'bg-black w-6 h-6  rounded-full absolute top-1  translate-x-0 ease-linear duration-500' : 'bg-grey w-6 h-6 rounded-full absolute top-1  translate-x-6 ease-linear duration-500'} onClick={cambioPlan}></div></div>
                <p className={select ? 'text-grey font-semibold duration-500 ease-in-out':'text-black font-semibold duration-500 ease-in-out'}>Yearly</p>
            </div>
          <div>
            <div>
                    <h3>Basic</h3>
                    <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                    <div>
                        <h4>$ {plan.precio[0]}</h4>
                        <p>{plan.tiempo}</p>
                    </div>
                    <button className="p-2 hover:text-grey bg-black w-full text-white uppercase tracking-widest">Pick Plan</button>

                </div>
                <div>
                    <h3>Pro</h3>
                    <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                    <div>
                        <h4>$ {plan.precio[1]}</h4>
                        <p>{plan.tiempo}</p>
                    </div>
                    <button className="p-2 hover:text-grey bg-black w-full text-white uppercase tracking-widest">Pick Plan</button>

                </div>
                <div>
                    <h3>Business</h3>
                    <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                    <div>
                        <h4>$ {plan.precio[2]}</h4>
                        <p>{plan.tiempo}</p>
                    </div>
                    <button className="p-2 hover:text-grey bg-black w-full text-white uppercase tracking-widest">Pick Plan</button>

                </div>
          </div>
         </div>



        <article className='relative w-full h-[288px] md:h-[280px] m-auto bg-fondopieMb md:bg-fondopieTb lg:bg-fondopieDt bg-cover '>
             
             <div className='w-full  text-white flex flex-col gap-12 p-5 pb-12 md:justify-center md:px-12   h-full max-w-[1110px] m-auto'>
                <div className='absolute gradiente w-40 h-2 top-0 mb-12 z-10 md:h-[280px] md:w-1 md:top-0 md:left-0 '></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8 md:flex-row  md:mt-0 md:justify-between md:items-center relative z-0'>

                    <h2 className='text-3xl mr-12 uppercase tracking-widest font-bold  md:text-4xl md:w-96 '>We’re in beta. Get your invite today! </h2>
                    <Link className='cursor-pointer'>
                    <div className='flex items-center mt-4 md:w-48 md:gap-0 gap-12  w-full'>
                        <p className="p-2 hover:text-grey   text-white uppercase tracking-widest">GET AN INVITE</p> 
                        <img src={arrow2} alt="arrow" className='cursor-pointer ' />
                    </div>
                    </Link>
                    
                </div>
             </div>
        </article>
    </div>
  )
}
