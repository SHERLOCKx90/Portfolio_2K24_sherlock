import { React, useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
// import './locomotive-scroll.css'
// import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  // const scrollRef = useRef(null);


  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   })
  //   return () => {
  //     scroll.destroy();
  //   }
  // }, []);

  return (
    <main>
      <section className='w-full'>
        <NavBar />
        <div className='w-full flex flex-row justify-center items-center my-10'>
          <div className='w-[60%] flex flex-col gap-5'>
            <div className='flex flex-row justify-start items-center text-md font-poppins font-normal sm:text-lg'>S  H  E  R  L  O  C  K</div>
            <div className='flex flex-row justify-start items-center text-2xl font-poppins font-semibold sm:text-5xl'>Programmer</div>
            <div className='flex flex-row justify-center items-center text-2xl font-poppins font-semibold sm:text-5xl'>Full-Stack Developer</div>
            <div className='flex flex-row justify-end items-end text-2xl font-poppins font-semibold sm:text-5xl'>UI/UX Designer</div>
            <div className='flex flex-row justify-end items-end text-md font-poppins font-normal sm:text-lg'>2  8  .  0  7  .  2  0  0  3</div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row mx-auto my-20 sm:my-40 sm:justify-center sm:items-center'>
          <div className='flex flex-col justify-center items-center sm:w-[40%]'><img src="../pic1.svg" alt="profile picture 1" className='w-[25rem] sm:w-[28rem]' />
            <p className='mx-10 mt-5 font-poppins font-normal sm:mx-40 text-lg'>Results-oriented web developer with 2+ years of experience seeks to leverage coding skills and design passion to create user-centric web applications with exceptional UI/UX.</p></div>
          <div className='sm:w-[50%] sm:px-10 mt-10 sm:mt-0'>
            <img src="../pic2.svg" alt="profile picture 2" />
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col gap-10'>
          <div className='w-full flex flex-row justify-center items-center sm:w-[74%] sm:justify-start'><h1 className='text-4xl font-poppins font-semibold sm:text-5xl'>Worked for . . .</h1></div>
          <div className='flex flex-col sm:flex-row sm:justify-start sm:items-center sm:gap-10 justify-center items-center w-[74%]'>
            <div className='flex flex-col justify-between gap-auto items-start w-auto px-5 py-5 h-[20rem] '>
              <img src="../zeebangla.svg" alt="" width="120" />
              <p className='mt-5 font-poppins text-lg text-black'>
                Freelanced as full-stack web dev & UI/UX designer for Zee Bangla's zeebanglamuktomancho.com, a platform for club & participant registration in 2024 Durga Puja events across West Bengal.
              </p>
            </div>
            <div className='flex flex-col justify-between items-start w-auto px-5 py-5 h-[20rem] '>
              <img src="../app2build.svg" alt="" width="150" />
              <p className='mt-5 font-poppins text-lg text-black'>Currently a frontend dev intern here, designing and optimizing the UI for their Interlink product based on the latest UX research.
              </p>
            </div>
            <div className='flex flex-col justify-between items-start w-auto px-5 py-5 h-[20rem] '>
              <img src="../a3transforms.svg" alt="" width="250" />
              <p className='mt-5 font-poppins text-lg text-black'>
                Owned full-stack development at A3 Transforms, building the CONVAID web app with a React frontend and Python backend integration using (REST APIs) for a seamless user experience.              </p>
            </div>
            <div className='flex flex-col justify-between items-start w-auto px-5 py-5 h-[20rem] '>
              <img src="../evanke.svg" alt="" width="200" />
              <p className='mt-5 font-poppins text-lg text-black'>
                Worked as a UI/UX Design intern here, designing and optimizing the UI for their products like TACIT, GENCOMP, etc. based on the latest UX research.              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-center items-center mt-10' style={{ position: 'sticky', top: '0', zIndex: '-10' }}><img src="../grouppic.svg" alt="group picture in evanke" className='w-[100%]' /></div>
        <div className='min-h-screen bg-white flex flex-col justify-start items-center w-full sm:px-[15rem] px-10 py-40'>
          <div className='w-[74%] flex flex-row justify-end items-center'>
            <h1 className='text-3xl font-poppins font-semibold sm:text-5xl'>
              I have also volunteered in . . .
            </h1>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center w-full mt-20 py-10'>
            <div id="left-div" className='sm:w-[50%] mb-10 sm:mb-0 sm:mr-10 flex flex-col justify-center items-center'>
              <img src="../gallery.svg" alt="" />
            </div>
            <div id="right-div" className='sm:w-[50%] flex flex-col justify-start items-start py-10'>
              <ul className='flex flex-col gap-20'>
                <div className='w-fit flex flex-col justify-center items-start px-10 hover:cursor-pointer font-poppins text-lg font-normal text-black'>
                  <div className='flex flex-row gap-5 items-center justify-center font-poppins text-3xl text-black font-semibold'>
                    <span>
                      <img src="../hackclub.svg" alt="hackclub logo" /></span>
                    HackClub VITC
                  </div>
                  <p className='w-[100%] py-5'>Designed graphical assets like social media graphics (Instagram posts & banners) for Hack Club.</p>
                </div>
                <div className='w-fit flex flex-col justify-center items-start px-10 decoration-none hover:cursor-pointer font-poppins text-lg font-normal text-black'>
                  <div className='flex flex-row gap-5 items-center justify-center font-poppins text-3xl text-black font-semibold'>
                    <span>
                      <img src="../cyscom.svg" alt="hackclub logo" /></span>
                    CYSCOM VITC
                  </div>
                  <p className='w-[100%] py-5'>Designed & developed CysHub app, UI for cyscomvitc.com & Hackfiesta websites, optimized color theme for Hackfiesta - all for CYSCOM & Hack Club.</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col gap-10 min-h-screen bg-white'>
          <div className='w-full flex flex-row justify-center items-center sm:w-[74%] sm:justify-start'><h1 className='text-4xl font-poppins font-semibold sm:text-5xl text-left mx-20 sm:mx-0'> . . . Wanna work together?</h1></div>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-10 justify-center items-center w-[74%]'>
            <div className='flex flex-col justify-start items-start gap-5'>
              <p className='font-poppins font-normal text-xl'>Let's spark a conversation about your next game-changer.</p>
              <button className='px-3 py-2 bg-black text-white font-poppins font-medium'>Send “Hi”</button>
            </div>
            <div className='my-10 sm:my-0'>
              <img src="../contactstar.svg" alt="contact image" className='w-full' />
            </div>
          </div>
        </div>

        <footer className='bg-white w-full py-20 flex flex-row justify-center items-center '>
          <div className='w-[74%] flex flex-col sm:flex-row '>
            <div className='w-full px-20 flex flex-col justify-center items-center sm:justify-start sm:items-start gap-5 sm:gap-10'>
              <img src="../logo.svg" alt="" width="120" />
              <div className='flex flex-row mx-0'>
                <img src="../linkedin.svg" alt="" width="80" />
                <img src="../linkedin.svg" alt="" width="80" />
                <img src="../linkedin.svg" alt="" width="80" />
              </div>
            </div>
            <div className=' w-full flex flex-col sm:flex-row justify-start items-center gap-10 sm:gap-20 pt-10 sm:pt-0'>
              <div className='flex flex-col justify-start items-start'>
                <ul className='flex flex-col gap-4 hover:cursor-pointer sm:justify-start justify-center items-center sm:items-start'>
                  <li>Home</li>
                  <li>Experience</li>
                  <li>Volunteering</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className='flex flex-col justify-start items-start'>
                <ul className='flex flex-col gap-4 hover:cursor-pointer sm:justify-start justify-center items-center sm:items-start'>
                  <li>Works</li>
                  <li>Projects</li>
                  <li>Blogs</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div></div>

        </footer>
      </section>
    </main>
  )
}

export default App
