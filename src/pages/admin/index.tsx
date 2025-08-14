import { Input } from "../../components/input"
import { useEffect, useState, type FormEvent } from "react"
import { FaTrash } from "react-icons/fa"
import { TbBackground } from "react-icons/tb"

import { auth, db } from "../../services/firebaseconection.ts"
import { 
addDoc,
onSnapshot,
query,
orderBy,
doc,
deleteDoc,
collection
 } from "firebase/firestore"

 interface ListProps{
    id: string,
    name:string,
    url: string,
    bg:string,
    color: string

 }

export function Admin(){
    const [nameInput, setNameInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const [textColorInput, setTextColorInput] = useState('#f1f1f1')
    const [bgColorInput, setBgColorInput] = useState('')

    const [links, setLinks] =useState<ListProps[]>([])

    useEffect(() =>{
        const linksRef = collection(db, 'links');
        const queryRef = query(linksRef, orderBy('created','asc'))

        const unsub =onSnapshot(queryRef, (snapshot) =>{
            let list =[] as ListProps[];

            snapshot.forEach((doc)=>{
                list.push({
                    id: doc.id,
                    name:doc.data().name,
                    url:doc.data().url,
                    bg:doc.data().bg,
                    color:doc.data().color
                })
            })
            setLinks(list);
        })
        return()=>{
            unsub();
        }
        
    },[])

    function handleRegister(e: FormEvent){
        e.preventDefault()

        if(nameInput === '' || urlInput === ''){
        alert('fill the gaps')
        return;
        }
        addDoc(collection(db, 'links'),{
            name: nameInput,
            url: urlInput,
            bg: bgColorInput,
            color: textColorInput,
            created: new Date()
        })
        .then(() =>{
            setNameInput('')
            setUrlInput('')
            console.log('sucessfuly registred.')
        })
        .catch((error) =>{
            console.log('ERROR DETECTED' + error)
        })

    }

         async function handleDelete(id: string) {
            const docRef = doc(db, 'links', id)
            await deleteDoc(docRef)

        }
   
    return (
        <>
        <div className="flex item-center flex-col min-h-screen pb-7 px-2">

            <form onSubmit={handleRegister} className="flex flex-col  mt-8 mb-3  w-11/12 max-w-x1">
                <label className="text-white font-medium mt-2 mab-2">Name</label>

                <Input
                placeholder="Type Name..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mab-2">URL</label>

                <Input
                type="url"
                placeholder="Type URL..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                />

                <section className="flex my-4 gap-4">
                    <div className="flex gap-3">
                        <label className="text-white font-medium mt-2 mb-2">Color Link</label>
                        <input type="color"
                        value={textColorInput}
                        onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>
                       <div className="flex gap-3">
                        <label className="text-white font-medium mt-2 mb-2">background Link</label>
                        <input type="color"
                        value={bgColorInput}
                        onChange={(e) => setBgColorInput(e.target.value)}
                        />
                    </div>
                </section>

               {nameInput !== '' && (
                 <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                <label className="text-white font-medium mt-2 mb-3">it's look like</label>
                <article
                className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                style={{marginBottom:8, marginTop:8, background: bgColorInput}}
                >
                    <p className="font-medium" style={{color:textColorInput}}>{nameInput}</p>
                </article>
                </div>

               )}

                <button type="submit"
                className="bg-blue-500 rounded-md hover:cursor-pointer text-white font-medium gap-4 flex justify-center py-2 items-center mb-5">
                    Register Link
                </button>

                 </form>

                <h2 className="font-bold text-white mb-5 text-2x1 text-center "> My Links</h2>
                {links.map( (link) =>(
                    <article 
                    key={link.id}
                className="flex items-center justify-between rounded py-3 px-2 mb-2 select-none w-11/12 max-w-x1"
                style={{backgroundColor: link.bg, color: link.color}}
                >
                    <p>{link.name}</p>
                    <div>
                        <button
                        className=" hover:cursor-pointer border border-dashed p-1 rounded"
                        onClick={()=> handleDelete(link.id)}
                        >
                            <FaTrash size={18} color={'#FFF'}/>
                        </button>

                    </div>
                </article>
                ))}
        </div>
        </>
    
    )
}