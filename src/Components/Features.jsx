import heroMobile from '../../src/assets/features/mobile/hero.webp'
import heroTablet from '../../src/assets/features/tablet/hero.webp'
import heroDesktop from '../../src/assets/features/desktop/hero.webp'
import logoResponsive from '../assets/features/desktop/responsive.svg'
import logoEmbed from '../assets/features/desktop/embed.svg'
import logoNoLimit from '../assets/features/desktop/no-limit.svg'
import domain from '../assets/features/desktop/custom-domain.svg'
import boost from '../assets/features/desktop/boost-exposure.svg'
import drag from '../assets/features/desktop/drag-drop.svg'
import { Link } from 'react-router-dom'
import arrow2 from '../../src/assets/shared/desktop/arrow2.svg'
import '../App.css'

const Features = () => {
  return (
    <div className='w-full m-auto max-w-[1440px]'>
         <header className='w-full m-auto flex flex-col  md:flex-row-reverse '>
             <img src={heroMobile} alt="Mobile" className='md:hidden'/>
             <img src={heroTablet} alt="Tablet" className='hidden md:flex lg:hidden'/>
             <img src={heroDesktop} alt="Desktop" className='hidden lg:flex  lg:w-[600px] xl:w-full'/>
             <div className='w-full bg-black text-white flex flex-col gap-12 p-5 pb-12 relative md:justify-center md:px-12 xl:pl-24'>
                <div className='absolute gradiente  w-40 h-2 top-0 mb-12  md:h-48 md:w-1 md:top-40 md:left-0 lg:top-24 xl:top-40 md:mb-0'></div>
                <div className='flex flex-col gap-4 mt-12 md:gap-8'>
                    <h1 className='text-3xl uppercase tracking-widest font-medium mr-12 md:text-4xl'>FEATURES </h1>
                    <p className='text-grey text-base mr-5 text-left md:mr-1 leading-[1.7rem]  lg:mr-12 xl:mr-28 '>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                    
                </div>
             </div>
        </header>
        <section  className='flex flex-col justify-center items-center p-8 max-w-[1110px]  m-auto md:grid md:grid-cols-2 lg:grid-cols-3  xl:px-12 xl:py-20  xl:gap-7'>
            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between' >
                <img src={logoResponsive} alt="responsive" className='w-20 my-6 h-20 ' />
                <h3 className='text-xl font-bold'>100% Responsive</h3>
                <p className='text-grey font-normal '>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between'>
                <img src={logoNoLimit} alt="no limit"  className='w-28 my-6 h-20'/>
                <h3 className='text-xl font-bold'>No Photo Upload Limit</h3>
                <p className='text-grey font-normal'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between'>
                <img src={logoEmbed} alt="embed" className='w-20 my-6 h-20 '/>
                <h3 className='text-xl font-bold'>Available to Embed</h3>
                <p className='text-grey font-normal'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
            </div>
            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between' >
                <img src={domain} alt="responsive" className='w-20 my-6 h-20 ' />
                <h3 className='text-xl font-bold'>Custom Domain</h3>
                <p className='text-grey font-normal '>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between'>
                <img src={boost} alt="no limit"  className='w-20 my-6 h-20 '/>
                <h3 className='text-xl font-bold'>Boost Your Exposure</h3>
                <p className='text-grey font-normal'>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
            </div> 

            <div className='flex flex-col justify-center items-center p-8  gap-6 text-center   xl:p-0 h-full xl:justify-between'>
                <img src={drag} alt="embed"  className='w-20 my-6 h-20 '/>
                <h3 className='text-xl font-bold'>Drag & Drop Image</h3>
                <p className='text-grey font-normal'>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. </p>
            </div>     
        </section>
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

export default Features