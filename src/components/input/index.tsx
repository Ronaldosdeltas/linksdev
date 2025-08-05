import type { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{

}
export function Input(Props:inputProps){
    return(
        <input className="border-0 rounded-md h-9 outline-none px-2 mb-4 bg-amber-50"
        
        {...Props}
        />
    
        
        
    )
}