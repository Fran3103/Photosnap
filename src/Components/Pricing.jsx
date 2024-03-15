import heroMobile from '../../src/assets/pricing/mobile/hero.webp'
import heroTablet from '../../src/assets/pricing/tablet/hero.webp'
import heroDesktop from '../../src/assets/pricing/desktop/hero.webp'
import check from '../../src/assets/pricing/desktop/check.svg'
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
    
    const [selectedPlan, setSelectedPlan] = useState('mes');

  
  return (
    <div className='w-full m-auto max-w-[1440px]'>

        <header className='w-full m-auto flex flex-col  md:flex-row-reverse '>
             <img src={heroMobile} alt="Mobile" className='md:hidden'/>
             <img src={heroTablet} alt="Tablet" className='hidden md:flex lg:hidden'/>
             <img src={heroDesktop} alt="Desktop" className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div className='w-full bg-black text-white flex flex-col gap-12 p-8 pb-12 relative md:justify-center md:px-12 '>
                <div className='absolute gradiente  w-40 h-2 top-0 mb-12  md:h-48 md:w-1 md:top-40 md:left-0 lg:top-24 xl:top-40 md:mb-0'></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8'>
                    <h1 className='text-3xl uppercase tracking-widest font-medium mr-12 md:text-4xl'>PRICING </h1>
                    <p className='text-grey text-base mr-5 text-left md:mr-1 leading-[1.7rem]  lg:mr-12 xl:mr-28 '>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                    
                </div>
             </div>
        </header>

         <div className='flex flex-col justify-center items-center  py-12 px-8'>
            <div className='flex  items-center justify-center gap-5 w-full cursor-pointer' onClick={cambioPlan}>
                <p className={select ? 'text-black font-semibold':'text-grey font-semibold'}>Monthly</p>
                <div className={select ? 'bg-grey w-16 h-8  rounded-full relative p-2 duration-500 ease-in-out' : 'bg-black w-16 h-8 rounded-full relative p-2 ease-in-out duration-500'}> <div className={select ? 'bg-black w-6 h-6  rounded-full absolute top-1  translate-x-0 ease-linear duration-500 cursor-pointer ' : ' cursor-pointer bg-grey w-6 h-6 rounded-full absolute top-1  translate-x-6 ease-linear duration-500'}></div></div>
                <p className={select ? 'text-grey font-semibold duration-500 ease-in-out':'text-black font-semibold duration-500 ease-in-out'}>Yearly</p>
            </div>
            <div className='flex flex-col mt-8 gap-6 xl:flex-row xl:items-center'>

                <div className={selectedPlan === 'mes' ? 'bg-black relative text-white w-[318px] h-[410px] flex flex-col justify-center gap-6 items-center md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px] xl:w-[350px] xl:h-[470px] xl:flex-col xl:justify-center xl:items-center ' : 'bg-grey2 text-black w-[318px] h-[410px] flex flex-col justify-center items-center gap-6 md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px]  xl:w-[350px] xl:h-[410px] xl:flex-col xl:justify-center xl:items-center'}>
                    <div className='flex flex-col justify-center items-center  md:items-start w-72 md:gap-4 xl:items-center'>
                        <h3 className='font-bold text-2xl   '>Basic</h3>
                        <p className='text-center mx-2 my-3  md:text-start md:mx-0 xl:text-center '>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                        <button className={selectedPlan === 'mes' ? "p-2 hidden md:flex xl:hidden bg-grey2 w-64 text-black font-black uppercase text-xs py-4  tracking-widest md:justify-center ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 tracking-widest hidden md:flex xl:hidden md:justify-center"} onClick={() => setSelectedPlan('mes')}>Pick Plan</button>
                    </div>
                    <div className='flex flex-col justify-center items-center md:items-end md:justify-start md:h-full  xl:h-20  xl:justify-center xl:items-center'>
                        <h4 className='text-4xl tracking-wider font-bold md:text-5xl'>$ {plan.precio[0]}.00</h4>
                        <p className='text-[13px] mt-2'>{plan.tiempo}</p>
                    </div>
                    <div className='absolute gradiente w-full h-2 top-0 mb-12 z-10 md:h-full md:w-1 md:top-0 md:left-0  xl:h-2 xl:w-full '></div>
                    <button className={selectedPlan === 'mes' ? "p-2  md:hidden xl:flex justify-center bg-grey2 w-64 text-black font-black uppercase text-xs py-4 tracking-widest  ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 md:hidden  xl:flex justify-center tracking-widest"} onClick={() => setSelectedPlan('mes')}>Pick Plan</button>
                </div>


                <div className={selectedPlan === 'anual' ? 'bg-black relative text-white w-[318px] h-[410px] flex flex-col justify-center gap-6 items-center md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px] xl:w-[350px] xl:h-[470px] xl:flex-col xl:justify-center xl:items-center ' : 'bg-grey2 text-black w-[318px] h-[410px] flex flex-col justify-center items-center gap-6 md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px]  xl:w-[350px] xl:h-[410px] xl:flex-col xl:justify-center xl:items-center'}>
                    <div  className='flex flex-col justify-center items-center  md:items-start w-72 gap-4 xl:items-center'>
                        <h3 className='font-bold text-2xl'>Pro</h3>
                        <p className='text-center mx-2 md:text-start md:mx-0  xl:text-center'>More advanced features available. Recommended for photography veterans and professionals.</p>
                        <button className={selectedPlan === 'anual' ?  "p-2 hidden md:flex xl:hidden bg-grey2 w-64 text-black font-black uppercase text-xs py-4  tracking-widest md:justify-center ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 tracking-widest hidden md:flex  xl:hidden md:justify-center"} onClick={() => setSelectedPlan('anual')}>Pick Plan</button>
                    </div>
                    <div className='flex flex-col justify-center items-center  md:items-end md:justify-start md:h-full  xl:h-20   xl:items-center'>
                        <h4 className='text-5xl font-bold'>$ {plan.precio[1]}.00</h4>
                        <p className='text-[13px] mt-2'>{plan.tiempo}</p>
                        
                    </div>
                    <div className='absolute gradiente w-full h-2 top-0 mb-12 z-10 md:h-full md:w-1 md:top-0 md:left-0 xl:h-2 xl:w-full '></div>
                    <button className={selectedPlan === 'anual' ? "p-2  md:hidden xl:flex justify-center bg-grey2 w-64 text-black font-black uppercase text-xs py-4 tracking-widest  ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 md:hidden  xl:flex justify-center tracking-widest"} onClick={() => setSelectedPlan('anual')}>Pick Plan</button>
                </div>


                <div className={selectedPlan === 'business' ? 'bg-black relative text-white w-[318px] h-[410px] flex flex-col justify-center gap-6 items-center md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px] xl:w-[350px] xl:h-[470px] xl:flex-col xl:justify-center xl:items-center ' : 'bg-grey2 text-black w-[318px] h-[410px] flex flex-col justify-center items-center gap-6 md:flex-row md:p-8 md:justify-between md:w-[690px] md:h-[270px]  xl:w-[350px] xl:h-[410px] xl:flex-col xl:justify-center xl:items-center'}>
                    <div  className='flex flex-col justify-center items-center md:items-start  w-72 gap-4 xl:items-center'>
                        <h3 className='font-bold text-2xl'>Business</h3>
                        <p className='text-center mx-2 md:text-start md:mx-0  xl:text-center'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                        <button className={selectedPlan === 'business' ? "p-2 hidden md:flex xl:hidden bg-grey2 w-64 text-black   font-black uppercase text-xs py-4  tracking-widest md:justify-center ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 tracking-widest hidden   md:flex  xl:hidden  md:justify-center"} onClick={() => setSelectedPlan('business')}>Pick Plan</button>
                    </div>
                    <div className='flex flex-col justify-center items-center  md:items-end md:justify-start md:h-full xl:h-20 xl:items-center'>
                        <h4 className='text-5xl font-bold'>$ {plan.precio[2]}.00</h4>
                        <p className='text-[13px] mt-2'>{plan.tiempo}</p>
                    </div>
                    <div className='absolute gradiente w-full h-2 top-0 mb-12 z-10 md:h-full md:w-1 md:top-0 md:left-0 xl:h-2 xl:w-full '></div>
                    <button className={selectedPlan === 'business' ? "p-2  md:hidden xl:flex justify-center bg-grey2 w-64 text-black font-black uppercase text-xs py-4 tracking-widest  ":"p-2 hover:text-grey2 bg-black w-64 text-white uppercase text-xs py-4 md:hidden  xl:flex justify-center tracking-widest"} onClick={() => setSelectedPlan('business')}>Pick Plan</button>
                </div>
            </div>
         </div>

        <div className='max-w-[730px] p-8 m-auto md:hidden'>
              <h3 className='text-lg tracking-[1px] font-bold uppercase my-5'>The features</h3>
              <hr />
              <div>
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>UNLIMITED STORY POSTING</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                        <img src={check} alt="check" />
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                        <img src={check} alt="check" />
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr  className='text-grey opacity-50'/>
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>UNLIMITED PHOTO UPLOAD</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p>basic</p>
                        <img src={check} alt="check" />
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                        <img src={check} alt="check" />
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr className='text-grey opacity-50' />
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>EMBEDDING CUSTOM CONTENT</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                        
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                        <img src={check} alt="check" />
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr className='text-grey opacity-50' />
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>CUSTOMIZE METADATA</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                        
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                        <img src={check} alt="check" />
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr  className='text-grey opacity-50'/>
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>ADVANCED METRICS</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                       
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                       
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr className='text-grey opacity-50' />
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>PHOTO DOWNLOADS</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                      
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                       
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr  className='text-grey opacity-50'/>
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>SEARCH ENGINE INDEXING</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                       
                       
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                       
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr className='text-grey opacity-50'/>
                <h3 className='text-lg tracking-[1px] font-bold uppercase my-4'>CUSTOM ANALYTICS</h3>
                <div className='flex justify-between gap-4 my-3'>
                    <div className='flex flex-col justify-between items-start gap-2 '>
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>basic</p>
                     
                       
                    </div>
                    <div className='flex flex-col justify-between items-start gap-2  '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>pro</p>
                      
                    </div>
                    <div className='flex flex-col  justify-between items-start  gap-2 '>
                        
                        <p className='text-grey uppercase text-[12px] tracking-[1px] font-semibold'>business</p>
                        <img src={check} alt="check" />
                        
                    </div>
                </div>
                <hr  className='text-grey opacity-50'/>
               
              </div>
        </div>
        <h2 className='text-4xl xl:text-5xl text-center uppercase font-bold mt-12 md:block hidden '>compare</h2>
        <div className='max-w-[830px] w-full md:flex flex flex-col p-8 m-auto justify-between mb-20 '>
            <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                    <h3>the features</h3>
                    <div className='flex justify-between   w-[300px]'>
                        <h4>basic</h4>
                        <h4>pro</h4>
                        <h4>business</h4>
                    </div>
                </div>
            </div>
                <hr className='w-full '/>

                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>UNLIMITED STORY POSTING</h3>
                        <div className='flex justify-between w-[300px]'>
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>UNLIMITED PHOTO UPLOAD</h3>
                        <div className='flex justify-between w-[300px]'>
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>EMBEDDING CUSTOM CONTENT</h3>
                        <div className='flex justify-between w-[160px]'>
                           
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>CUSTOMIZE METADATA</h3>
                        <div className='flex justify-between w-[160px]'>
                            
                            <img src={check} alt="check" />
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>ADVANCED METRICS</h3>
                        <div className='flex justify-end w-[300px]'>
                            
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>PHOTO DOWNLOADS</h3>
                        <div className='flex justify-end w-[300px]'>
                            
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>SEARCH ENGINE INDEXING</h3>
                        <div className='flex justify-end w-[300px]'>
                            
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                    <hr className='text-grey opacity-30'/>
                <div className=' p-8 m-auto hidden md:flex justify-between w-full'>
                    <div className='uppercase text-xl font-bold tracking-[1px] flex justify-between w-full items-center'>
                        <h3 className=' text-xs lg:text-base'>CUSTOM ANALYTICS</h3>
                        <div className='flex justify-end w-[300px]'>
                            
                            <img src={check} alt="check" />
                            
                        </div>
                    </div>
                </div>
                <hr className='text-grey opacity-30'/>
        </div>

        <article className='relative w-full h-[288px] md:h-[280px] m-auto bg-fondopieMb md:bg-fondopieTb lg:bg-fondopieDt bg-cover '>
             
             <div className='w-full  text-white flex flex-col gap-12 p-5 pb-12 md:justify-center md:px-12   h-full max-w-[1110px] m-auto'>
                <div className='absolute gradiente w-40 h-2 top-0 mb-12 z-10 md:h-[280px] md:w-1 md:top-0 md:left-0 '></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8 md:flex-row  md:mt-0 md:justify-between md:items-center relative z-0'>

                    <h2 className='text-3xl mr-12 uppercase tracking-widest font-bold  md:text-4xl md:w-96 '>We’re in beta. Get your invite today! </h2>
                    <Link to='/pricing' className='cursor-pointer'>
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
