import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/Login"

const AuthRoutes = () => {
    return (
        <section className="relative">
            <Routes>
                <Route path="/login" element={ <Login />} />
                <Route path="*" element={ <Navigate to={"/auth/login"} /> } />
            </Routes>
        </section>
    )
}

export default AuthRoutes