import { Input } from "../../components/input"
import { useState } from "react"

export function Admin(){
    const [nameInput, setNameInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const [textColorInput, setTextColorInput] = useState('#f1f1f1')
    const [bgColorInput, setBgColorInput] = useState('')
    return (
        <>
        <div className="flex item-center flex-col min-h-screen pb-7 px-2">

            <form className="flex flex-col mt-8 mb-3  w-full max-w-x1">
                <label className="text-white font-medium mt-2 mab-2">link Name</label>

                <Input
                placeholder="Type Link..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mab-2">link URL</label>

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
            </form>
            
        </div>
        </>
    
    )
}