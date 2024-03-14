import { Link } from 'react-router-dom'
import stories from  '../stories.json'
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'
import { useState } from 'react'

const Stories = () => {

    


    const [stori, setStori]= useState(stories[0])

    const storiSelect = (e)=> {
        setStori(stories[e])
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log(stories)
  return (
    <div className="w-full max-w-[1440px] m-auto">
         <div>
            <div className='w-full md:h-[650px] md:relative lg:flex' >
                <img src={stori.img[0]} alt="mobile" className='relative w-full h-full md:hidden'/>
                <img src={stori.img[1]} alt="tablet" className='hidden w-full md:flex md:absolute top-0 left-0 h-full'/>
                <div className='flex flex-col text-left gap-4 p-8 bg-black   text-white py-20  top-0 left-0 w-full h-full xl:pl-24 max-w-[800px]  '>
                    <div className='relative z-40 flex flex-col gap-10 justify-center items-start w-full h-full '>
                        <p className='text-[12px]  uppercase tracking-[2px] lg:text-[14px]'>{stori.subtitulo}</p>
                        <h1 className='text-3xl uppercase tracking-widest font-semibold xl:text-5xl'>{stori.titulo}</h1>
                        <p className='text-grey text-xs  tracking-widest md:text-white xl:text-base ' >{stori.fecha} <span className='text-white ml-4'>by {stori.autor}</span></p>
                        <p className='mb-12 text-grey font-light md:text-white md:max-w-[70%]  xl:text-xl leading-[1.7rem] '> {stori.historia}</p>
                    </div>
                    <div className='hidden md:absolute top-0 left-0 w-full h-full bg-gradient-to-l from-grey via-black to-black opacity-60 md:flex '>
                    </div>

                </div>
            </div>
            <div className='md:grid grid-cols-2 lg:grid-cols-4'>
                    { stories.slice(1).map((stori) => (

                        <div key={stori.id} className=' relative  w-full h-[full]  cursor-pointer md:hover:-translate-y-7 click  duration-200'>
                            <div className='  ' onClick={()=>storiSelect(stori.id)}>
                                <img src={stori.img[0]} alt="Mobile" className='relative w-full h-full md:hidden' />
                                <img src={stori.img[1]} alt="Desktop" className='hidden w-full md:flex' />
                                <div className='absolute top-0   w-full text-white bg-gradient-to-t from-black  h-full'>
                                    <div className='absolute bottom-0 w-full p-8 flex flex-col  gap-2'>
                                        <p>{stori.fecha}</p>
                                        <h3 className='text-xl font-medium'>{stori.titulo}</h3>
                                        <p>by {stori.autor}</p>
                                        <hr className='w-full' />
                                        <Link>
                                            <div className='flex justify-between items-center mt-2 '>
                                                <h4 className='tracking-[1px]'>READ STORY</h4>
                                                <img src={arrow2} alt="arrow" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
           
                        </div>
                    ))
                    }
            </div>
         </div>
    </div>
  )
}

export default Stories