import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/shared/ui/Button"
import { NavData } from "../../constant/data/main/home"
import Logo from "../../components/shared/Logo"

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full relative">
            <div className="bg-white w-full z-9 fixed inset-0 p-1 border-b border-gray-300 h-[79px]">
                <div className="max-w-5xl h-full flex items-center justify-center m-auto relative p-2">
                    <div className="w-full flex items-center justify-between gap-3.5 px-3">
                        <div>
                            <Logo />
                        </div>

                        <div className="px-2">
                            <ul className="flex items-center justify-center gap-8">
                                {NavData.map(nav => {
                                    return (
                                        <Link
                                            key={nav.id}
                                            to={nav.link}
                                            className="font-normal text-[#525252]"
                                        >
                                            {nav.text}
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <div className="relative">
                                    <Link to={"#"} className="border-b border-dashed border-blue-600 text-blue-600">
                                        Book a demo
                                    </Link>
                                </div>

                                <Button handleClick={() => navigate("/auth/login/")} title="login" children={"Login"} className="px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded duration-150 ease-out cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar