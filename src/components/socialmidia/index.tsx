import type { ReactNode } from "react"
interface SocailmidiaProps{
    url:string
    children:ReactNode
}

export function Socialmidia({url,children}:SocailmidiaProps){
 
    return(
        <>
        <a href={url} 
        target="_blank"
         rel="noopener noreferrer"
         >
            {children}
        </a>
    
        </>
    )
}