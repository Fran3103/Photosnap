import imagenCreateMobile from '../../src/assets/home/mobile/create-and-share.webp'
import imagenCreateTablet from '../../src/assets/home/tablet/create-and-share.webp'
import imagenCreateDesktop from '../../src/assets/home/desktop/create-and-share.webp'

import imagenBeautifulMobile from '../../src/assets/home/mobile/beautiful-stories.webp'
import imagenBeautifulTablet from '../../src/assets/home/tablet/beautiful-stories.webp'
import imagenBeautifulDesktop from '../../src/assets/home/desktop/beautiful-stories.webp'

import imagenDesignedMobile from '../../src/assets/home/mobile/designed-for-everyone.webp'
import imagenDesignedTablet from '../../src/assets/home/tablet/designed-for-everyone.webp'
import imagenDesignedDesktop from '../../src/assets/home/desktop/designed-for-everyone.webp'

import historia1Mobile from '../../src/assets/stories/mobile/mountains.webp'
import historia1Desktop from '../../src/assets/stories/desktop/mountains.webp'

import historia2Mobile from '../../src/assets/stories/mobile/cityscapes.webp'
import historia2Desktop from '../../src/assets/stories/desktop/cityscapes.webp'

import historia3Mobile from '../../src/assets/stories/mobile/18-days-voyage.webp'
import historia3Desktop from '../../src/assets/stories/desktop/18-days-voyage.webp'

import historia4Mobile from '../../src/assets/stories/mobile/architecturals.webp'
import historia4Desktop from '../../src/assets/stories/desktop/architecturals.webp'


import logoResponsive from '../assets/features/desktop/responsive.svg'
import logoEmbed from '../assets/features/desktop/embed.svg'
import logoNoLimit from '../assets/features/desktop/no-limit.svg'
import '../App.css'
import arrow from '../../src/assets/shared/desktop/arrow.svg'
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-full m-auto  max-w-[1440px]'>
        <header className='w-full m-auto flex flex-col  md:flex-row-reverse '>
             <img src={imagenCreateMobile} alt="Mobile" className='md:hidden'/>
             <img src={imagenCreateTablet} alt="Tablet" className='hidden md:flex lg:hidden'/>
             <img src={imagenCreateDesktop} alt="Desktop" className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div className='w-full bg-black text-white flex flex-col gap-12 p-5 pb-12 relative md:justify-center md:px-12 '>
                <div className='absolute gradiente w-40 h-2 top-0 mb-12  md:h-72 md:w-1 md:top-48 md:left-0  md:mb-0 lg:top-28 xl:top-48 lg:h-60 xl:h-72 '></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8 xl:pl-16'>
                    <h1 className='text-3xl uppercase tracking-widest font-medium mr-12 md:text-4xl'>Create and share your photo stories. </h1>
                    <p className='text-grey text-base mr-12 md:mr-1 xl:mr-16 '>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <Link to='/pricing' className='cursor-pointer'>
                    <div className='flex items-center gap-12'>
                        <p className='uppercase tracking-[3px] cursor-pointer hover:text-grey  text-[10px]  xl:text-base'>Get an Invite</p> 
                        <img src={arrow2} alt="arrow" className='cursor-pointer' />
                    </div></Link>
                </div>
             </div>
        </header>
        <article  className='w-full m-auto flex flex-col md:flex-row'>
             <img src={imagenBeautifulMobile} alt="Mobile" className='md:hidden' />
             <img src={imagenBeautifulTablet} alt="Tablet"  className='hidden md:flex lg:hidden'/>
             <img src={imagenBeautifulDesktop} alt="Desktop"  className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div className='w-full  flex flex-col gap-12 p-5 pb-12 relative  md:justify-center md:px-12 '>
                <div className='flex flex-col gap-4 mt-12 md:gap-8'>
                    <h2 className='text-3xl uppercase tracking-widest font-semibold mr-32  md:text-4xl'>BEAUTIFUL STORIES EVERY TIME </h2>
                    <p className='text-grey text-base mr-12  md:mr-1'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <Link to='/stories' className='cursor-pointer'>
                    <div className='flex items-center gap-12'>
                        <p className='uppercase tracking-[3px] cursor-pointer hover:text-grey font-black text-[10px] xl:text-base'>view the stories</p> 
                        <img src={arrow} alt="arrow" className='cursor-pointer ' />
                    </div></Link>
                </div>
             </div>
        </article>
        <article className='w-full m-auto flex flex-col md:flex-row-reverse'>
             <img src={imagenDesignedMobile} alt="Mobile" className='md:hidden' />
             <img src={imagenDesignedTablet} alt="Tablet" className='hidden md:flex lg:hidden ' />
             <img src={imagenDesignedDesktop} alt="Desktop" className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div  className='w-full  flex flex-col gap-12 p-5 pb-12 relative md:justify-center md:px-12 '>
                <div className='flex flex-col gap-4 mt-12 md:gap-8'>   
                    <h2 className='text-3xl uppercase tracking-widest font-semibold mr-32 md:text-4xl w-full'>DESIGNED FOR EVERYONE </h2>
                    <p className='text-grey text-base mr-12 md:mr-1'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. .</p>
                    <Link to='/stories' className='cursor-pointer'>
                    <div className='flex items-center gap-12'>
                        <p className='uppercase tracking-[3px] cursor-pointer hover:text-grey font-black text-[10px] xl:text-base '>view the stories</p> 
                        <img src={arrow} alt="arrow" className='cursor-pointer ' />
                    </div>
                </Link>
                </div>
            </div>
        </article>
        <section className='flex flex-col md:grid grid-cols-2 grid-rows-2 xl:flex-row xl:flex'>
            <div className=' relative  w-full h-[full]  cursor-pointer hover:-translate-y-7 click  duration-200'>
                <div className='  '>
                    <img src={historia1Mobile} alt="Mobile" className='relative w-full h-full md:hidden' />
                    <img src={historia1Desktop} alt="Desktop" className='hidden w-full md:flex' />
                    <div className='absolute top-0   w-full text-white bg-gradient-to-t from-black  h-full'>
                        <div className='absolute bottom-0 w-full p-8 flex flex-col  gap-2'>
                            <h3 className='text-xl font-medium'>The Mountains</h3>
                            <p>by John Appleseed</p>
                            <hr className='w-full' />
                            <Link to='/stories'>
                                <div className='flex justify-between items-center mt-2 '>
                                    <h4 className='tracking-[1px]'>READ STORY</h4>
                                    <img src={arrow2} alt="arrow" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
           
            </div>
            <div className=' relative  w-full h-[full]  cursor-pointer hover:-translate-y-7 click  duration-200'>
                <div className='  '>
                    <img src={historia2Mobile} alt="Mobile" className='relative w-full h-full md:hidden'/>
                    <img src={historia2Desktop} alt="Desktop"  className='hidden w-full md:flex' />  
                    <div className='absolute top-0   w-full text-white bg-gradient-to-t from-black  h-full'>
                        <div className='absolute bottom-0 w-full p-8 flex flex-col  gap-2'>
                            <h3 className='text-xl font-medium'>Sunset Cityscapes</h3>
                            <p>by  Benjamin Cruz</p>
                            <hr  className='w-full'/>
                            <Link to='/stories'>
                                <div className='flex justify-between items-center mt-2 '>
                                    <h4 className='tracking-[1px]'>READ STORY</h4>
                                    <img src={arrow2} alt="arrow" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' relative  w-full h-[full]  cursor-pointer hover:-translate-y-7 click  duration-200'>
                <div className='  '>
                    <img src={historia3Mobile} alt="Mobile" className='relative w-full h-full md:hidden' />
                    <img src={historia3Desktop} alt="Desktop" className='hidden  md:flex w-full' />
                    <div className='absolute top-0   w-full text-white bg-gradient-to-t from-black  h-full'>
                        <div className='absolute bottom-0 w-full p-8 flex flex-col  gap-2'>
                            <h3 className='text-xl font-medium'>18 Days Voyage</h3>
                            <p>by Alexei Borodin</p>
                            <hr className='w-full' />
                            <Link to='/stories'>
                                <div className='flex justify-between items-center mt-2 '>
                                    <h4 className='tracking-[1px]'>READ STORY</h4>
                                    <img src={arrow2} alt="arrow" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' relative  w-full h-[full]  cursor-pointer hover:-translate-y-7 click  duration-200'>
                <div className='  '>
                    <img src={historia4Mobile} alt="Mobile" className='relative w-full h-full md:hidden' />
                    <img src={historia4Desktop} alt="Desktop" className='hidden md:flex w-full h-full' />
                    <div className='absolute top-0   w-full text-white bg-gradient-to-t from-black  h-full'>
                        <div className='absolute bottom-0 w-full p-8 flex flex-col  gap-2'>
                            <h3 className='text-xl font-medium'>Architecturals</h3>
                            <p>by Samantha Brooke</p>
                            <hr className='w-full' />
                            <Link to='/stories' >
                                <div className='flex justify-between items-center mt-2 '>
                                    <h4 className='tracking-[1px]'>READ STORY</h4>
                                    <img src={arrow2} alt="arrow" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section  className='flex flex-col justify-center items-center p-8 max-w-[1110px] m-auto xl:flex-row   xl:justify-between xl:px-12 xl:py-20 xl:items-end xl:gap-7'>
            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center md:w-[570px]  xl:p-0 h-full xl:justify-between' >
                <img src={logoResponsive} alt="responsive" className='w-20 my-6 h-20 ' />
                <h3 className='text-xl font-bold'>100% Responsive</h3>
                <p className='text-grey font-normal '>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center md:w-[570px]  xl:p-0 h-full xl:justify-between'>
                <img src={logoNoLimit} alt="no limit"  className='w-28 my-6 h-20 '/>
                <h3 className='text-xl font-bold'>No Photo Upload Limit</h3>
                <p className='text-grey font-normal'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center md:w-[570px]  xl:p-0 h-full xl:justify-between'>
                <img src={logoEmbed} alt="embed"  className='w-20 my-6 h-20 '/>
                <h3 className='text-xl font-bold'>Available to Embed</h3>
                <p className='text-grey font-normal'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
            </div>    
        </section>
    </div>
  )
}

export default Home