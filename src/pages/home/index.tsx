import {FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { Socialmidia } from "../../components/socialmidia"
import AnimatedBackground from "../../components/animatedbackground/matrixbackground"
import { useState,useEffect } from 'react'
import { db } from '../../services/firebaseconection'
import { getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc

 } from 'firebase/firestore'

interface linksProps{
  id:string,
  name:string,
  url:string,
  bg:string,
  color:string,
}
interface socialProps{
  facebook: string,
  GitHub: string,
  Linkedin: string
}

export function Home(){
  const[links,setLinks]= useState<linksProps[]>([])
  const[socilLinks, setSocilLinks]= useState<socialProps>()

  useEffect(()=>{
    function loadLinks(){
      const linksRef = collection(db,'links')
      const queryRef = query(linksRef, orderBy('created','asc'))

      getDocs(queryRef)
      .then((snapshot)=>{
        let list =[] as linksProps[]

        snapshot.forEach((doc)=>{
          list.push({
            id:doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color:doc.data().color

          })
          setLinks(list)
        })
      })

    }
    loadLinks()

  },[])

  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">My Personal-Links</h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link)=>
        <section
        key={link.id}
        style={{backgroundColor: link.bg}}
        className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href={link.url} target='_blank'>
            <p className="text-base md:text-lg" style={{color: link.color}}>
              {link.name}
            </p>
          </a>
          
        </section>
        )}

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