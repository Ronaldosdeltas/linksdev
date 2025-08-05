import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { auth}from '../../services/firebaseconection'
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()


    function handelSubmit(e: FormEvent){
        e.preventDefault()
        console.log({
            email: email,
            password:password
        })
        if(email==='' || password === ''){
            alert('Preencha todos os campos')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            console.log('signed in successfully')
            navigator('/admin', {replace: true})

        })
        .catch((Error)=>{
            console.log(Error)
            alert(Error.message)
        })

    }


    return (
        <>
        <div className="flex w-full justify-center items-center h-screen flex-col">
            <Link to='/'>
            <h1 className="mb-10 mt-2 text-amber-50 font-bold text-4xl">Login
                <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Links</span>
            </h1>
            </Link>
            <form onSubmit={handelSubmit} className="max-w-xl w-full flex flex-col pix-2">

                <Input
                placeholder="type e-mail"
                type="e-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                 <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button 
                type="submit"
                className="h-9 bg-blue-500 rounded text-lg cursor-pointer border-0 font-medium text-white">
                    Login
                </button>

            </form>
        </div>
        </>
    
    )
}