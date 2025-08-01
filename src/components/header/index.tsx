
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-400 w-full py-6 flex items-center justify-between px-5">
      <Link to="/">
      <h1 className="text-amber-50 text-2xl font-bold">Ronaldoss
        <span className="bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent">-deltass</span>
      </h1>
      </Link>
      <nav>
        <Link to="/Contact" className="text-amber-50 hover:text-amber-200 text-2xl font-bold">
          Contact
        </Link>
      </nav>
    </header>
  );
}