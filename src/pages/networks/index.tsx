import { useState, type FormEvent } from "react";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseconection";
import{
    setDoc,
    getDoc,
    doc
} from'firebase/firestore'


export function Networks(){

    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [youtube, setYoutube] = useState('')


    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, 'social', 'link'),{
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
        .then(()=>{

        })
        .catch((error)=>{
            console.log('ERROR'+ error)
        })
    }

    return (
        <>
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <h1 className="text-white text-2x1 font-bold mt-8 mb-4">My Social Media</h1>
           
           <form onSubmit={handleRegister}
           className="flex flex-col max-w-xl w-full ">
            <label className="text-white font-medium mt-2 mb-2">Facebook Link</label>
            <Input
            type="url"
            placeholder="Type url fb..."
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            />

            <label className="text-white font-medium mt-2 mb-2">Instagram Link</label>
            <Input
            type="url"
            placeholder="Type url Insta..."
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            />

            <label className="text-white font-medium mt-2 mb-2">Youtube Link</label>
            <Input
            type="url"
            placeholder="Type url You..."
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            />

            <button type="submit"
             className="bg-blue-600 mb-7 font-medium justify-center items-center flex h-9 rounded-mb text-white">
                Save Links
            </button>
           </form>
        </div>

        </>
    
    )
}