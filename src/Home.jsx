import imagenCreateMobile from '../src/assets/home/mobile/create-and-share.webp'
import imagenCreateTablet from '../src/assets/home/tablet/create-and-share.webp'
import imagenCreateDesktop from '../src/assets/home/desktop/create-and-share.webp'

import imagenBeautifulMobile from '../src/assets/home/mobile/beautiful-stories.webp'
import imagenBeautifulTablet from '../src/assets/home/tablet/beautiful-stories.webp'
import imagenBeautifulDesktop from '../src/assets/home/desktop/beautiful-stories.webp'

import imagenDesignedMobile from '../src/assets/home/mobile/designed-for-everyone.webp'
import imagenDesignedTablet from '../src/assets/home/tablet/designed-for-everyone.webp'
import imagenDesignedDesktop from '../src/assets/home/desktop/designed-for-everyone.webp'

import historia1Mobile from '../src/assets/stories/mobile/mountains.webp'
import historia1Desktop from '../src/assets/stories/desktop/mountains.webp'

import historia2Mobile from '../src/assets/stories/mobile/cityscapes.webp'
import historia2Desktop from '../src/assets/stories/desktop/cityscapes.webp'

import historia3Mobile from '../src/assets/stories/mobile/18-days-voyage.webp'
import historia3Desktop from '../src/assets/stories/desktop/18-days-voyage.webp'

import historia4Mobile from '../src/assets/stories/mobile/architecturals.webp'
import historia4Desktop from '../src/assets/stories/desktop/architecturals.webp'


import logoResponsive from './assets/features/desktop/responsive.svg'
import logoEmbed from './assets/features/desktop/embed.svg'
import logoNoLimit from './assets/features/desktop/no-limit.svg'

import arrow from '../src/assets/shared/desktop/arrow.svg'
import arrow2 from '../src/assets/shared/desktop/arrow2.svg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-full m-auto '>
        <header className='w-full m-auto flex flex-col'>
             <img src={imagenCreateMobile} alt="Mobile" className=''/>
             <img src={imagenCreateTablet} alt="Tablet" className='hidden'/>
             <img src={imagenCreateDesktop} alt="Desktop" className='hidden'/>
             <div className='w-full bg-black text-white flex flex-col gap-12 p-5 pb-12 relative'>
                <div className='absolute bg-gradient-to-br from-uno via-dos to-tres w-40 h-2 top-0 mb-12'></div>
                <div className='flex flex-col gap-4 mt-12'>
                    <h1 className='text-3xl uppercase tracking-widest font-medium mr-12'>Create and share your photo stories. </h1>
                    <p className='text-grey text-base mr-12 font-thin'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <Link className='cursor-pointer'>
                    <div className='flex items-center gap-12'>
                        <p className='uppercase tracking-[3px] cursor-pointer hover:text-grey  text-[10px]'>Get an Invite</p> 
                        <img src={arrow2} alt="arrow" className='cursor-pointer' />
                    </div></Link>
                </div>
             </div>
        </header>
        <article  className='w-full m-auto flex flex-col'>
             <img src={imagenBeautifulMobile} alt="Mobile" className='' />
             <img src={imagenBeautifulTablet} alt="Tablet"  className='hidden'/>
             <img src={imagenBeautifulDesktop} alt="Desktop"  className='hidden'/>
             <div className='w-full  flex flex-col gap-12 p-5 pb-12 relative'>
                <div className='flex flex-col gap-4 mt-12'>
                    <h2 className='text-3xl uppercase tracking-widest font-semibold mr-32'>BEAUTIFUL STORIES EVERY TIME </h2>
                    <p className='text-black text-base mr-12 font-medium'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <Link className='cursor-pointer'>
                    <div className='flex items-center gap-12'>
                        <p className='uppercase tracking-[3px] cursor-pointer hover:text-grey font-black text-[10px]'>view the stories</p> 
                        <img src={arrow} alt="arrow" className='cursor-pointer ' />
                    </div></Link>
                </div>
             </div>
        </article>
        <article>
             <img src={imagenDesignedMobile} alt="Mobile" />
             <img src={imagenDesignedTablet} alt="Tablet" />
             <img src={imagenDesignedDesktop} alt="Desktop" />
             <div>
                    <h2>Create and share your photo stories. </h2>
                    <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <Link><p> view the stories</p> <img src={arrow} alt="arrow" /></Link>
            </div>
        </article>
        <section>
            <div>
                <img src={historia1Mobile} alt="Mobile" />
                <img src={historia1Desktop} alt="Desktop" />
                <div>
                    <h3>The Mountains</h3>
                    <p>by John Appleseed</p>
                    <hr />
                    <Link>
                        <div>
                            <h4>READ STORY</h4>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <img src={historia2Mobile} alt="Mobile" />
                <img src={historia2Desktop} alt="Desktop" />
                <div>
                    <h3>Sunset Cityscapes</h3>
                    <p>by  Benjamin Cruz</p>
                    <hr />
                    <Link>
                        <div>
                            <h4>READ STORY</h4>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <img src={historia3Mobile} alt="Mobile" />
                <img src={historia3Desktop} alt="Desktop" />
                <div>
                    <h3>18 Days Voyage</h3>
                    <p>by Alexei Borodin</p>
                    <hr />
                    <Link>
                        <div>
                            <h4>READ STORY</h4>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <img src={historia4Mobile} alt="Mobile" />
                <img src={historia4Desktop} alt="Desktop" />
                <div>
                    <h3>Architecturals</h3>
                    <p>by Samantha Brooke</p>
                    <hr />
                    <Link>
                        <div>
                            <h4>READ STORY</h4>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <section>
            <div>
                <img src={logoResponsive} alt="responsive" />
                <h3>100% Responsive</h3>
                <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div> 

            <div>
                <img src={logoNoLimit} alt="no limit" />
                <h3>No Photo Upload Limit</h3>
                <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div> 

            <div>
                <img src={logoEmbed} alt="embed" />
                <h3>Available to Embed</h3>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
            </div>    
        </section>
    </div>
  )
}

export default Home