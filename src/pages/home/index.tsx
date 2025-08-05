import {FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { Socialmidia } from "../../components/socialmidia"
import AnimatedBackground from "../../components/animatedbackground/matrixbackground"
export function Home(){

  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">My Personal-Links</h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">
              Canal no Youtube
            </p>
          </a>
          
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Socialmidia url='https://www.instagram.com/ronaldoss_deltass/'>
            <FaInstagram size={35} color='#E1306C'className='transform hover:rotate-360 transition-transform' />
          </Socialmidia>
          <Socialmidia url='https://github.com/Ronaldosdeltas'>
            <FaGithub size={35} color='#FFF' className='transform hover:rotate-360 transition-transform' />
          </Socialmidia>
          <Socialmidia url='https://www.linkedin.com/in/ronaldoss-santos-3a9406325/'>
            <FaLinkedinIn size={35} color='#0A66C2'className='transform hover:rotate-360 transition-transform' />
          </Socialmidia>

          
        </footer >

      </main>
      <AnimatedBackground />
    </div>
  )
}