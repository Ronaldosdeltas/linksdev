import { Outlet } from "react-router-dom";
import { Header} from "../header/index.tsx";

export function Layout(){
    return(
        <>
        <Header />
        <Outlet />

        </>
    )
}