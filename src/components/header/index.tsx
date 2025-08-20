
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../../services/firebaseconection";
import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";

export function Header(){
  const location = useLocation()
  const isAdminpage = location.pathname === '/admin'

   async function handlelogout(){
  await signOut(auth)

}
  return (
    <header className="bg-gray-900 w-full py-6 flex items-center justify-between px-7">
      <div className="flex items-center space-x-4">
      <Link to="/">
      <h1 className="text-amber-50 text-2xl font-bold hover:text-amber-300">Ronaldoss
        <span className="bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent  hover:text-amber-300">-deltass</span>
      </h1>
      </Link>
      <Link
          to="/"
          className="text-amber-50 hover:text-amber-300 text-2xl font-medium"
        >
          Home
        </Link>

        <Link
        to= '/admin'
        className="text-amber-50 hover:text-amber-300 text-2xl font-medium"
        >
        Links
        </Link>

         <Link
        to= '/admin/socialmidia'
        className="text-amber-50 hover:text-amber-300 text-2xl font-medium"
        >
        Social Media
        </Link>
        </div>
      <nav className="flex items-center space-x-4">
        {isAdminpage && (
        <button 
        className="text-white hover:text-amber-300 hover:bg-gray-700 rounded-full p-2 transition duration-300"
        onClick={handlelogout}>
          <BiLogOut size={28} color= '#FFF' />
        </button>
        )}
   
      </nav>
    </header>
  );
}