import { Link } from "react-router-dom";

export function Login(){
    return (
        <>
        <div className="flex w-full justify-center items-center h-screen flex-col">
            <Link to='/'>
            <h1 className="mb-10 mt-2 text-amber-50 font-bold text-4xl">Login
                <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
            </h1>
            </Link>
        </div>
        </>
    
    )
}