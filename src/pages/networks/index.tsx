import { Input } from "../../components/input";

export function Networks(){
    return (
        <>
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <h1 className="text-white text-2x1 font-bold mt-8 mb-4">My Social Media</h1>
           
           <form className="flex flex-col max-w-xl w-full ">
            <label className="text-white font-medium mt-2 mb-2">Facebook Link</label>
            <Input
            type="url"
            placeholder="Type url fb..."
            />
           </form>
        </div>

        </>
    
    )
}