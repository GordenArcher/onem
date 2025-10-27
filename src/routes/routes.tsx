import { Route, Routes } from "react-router-dom"
import AuthRoutes from "./auth/routes"
import Index from "../pages/main/Index"
import Notfound from "../pages/not_found/notfound"

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="*" element={ <Notfound /> } />
        </Routes>
    )
}

export default PageRoutes