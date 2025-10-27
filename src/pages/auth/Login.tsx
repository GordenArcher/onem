import { useCallback, useState } from "react"
import Logo from "../../components/shared/Logo"
import { Eye, EyeClosed, Loader } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../../components/shared/ui/Button"

const Login = () => {
    const [viewPassword, setViewPassword] =useState<boolean>(false)
    const [isLoading, setIsLoading] =useState<boolean>(false)

    const login = useCallback( async () => {

        setIsLoading(true)

        setTimeout(() => {
                setIsLoading(false)
            }, 5000)

        // try {
            
            
        // } catch (error) {
        //     return error
        // }finally{
        //     setIsLoading(false)
        // }

    }, [])


    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md rounded-xl p-8 border border-gray-300">

                <div className="space-y-8 relative">
                    <div className="flex flex-col gap-[24px]">
                        <div>
                            <Logo />
                        </div>

                        <div>
                            <h1 className="text-2xl text-start mb-2 text-[40px] font-bold font-sans">Login</h1>
                            <span className="font-medium text-sm">Enter your credentials to access your account.</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start flex-col gap-2">
                            <label htmlFor="email" className="block text- font-semibold text-gray-700">
                                Email
                            </label>
                            
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1 outline-none focus:border-gray-400 duration-150 ease-in-out"
                                
                            />
                        </div>

                        <div className="flex items-start flex-col gap-2 relative">
                            <label htmlFor="password" className="block text- font-semibold text-gray-700">
                                Password
                            </label>
                            
                            <input
                                type={viewPassword ? "text" : "password"}
                                id="password"
                                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1 pr-14 outline-none focus:border-gray-400 duration-150 ease-in-out"
                                
                            />

                            <div className="absolute right-3 top-9.5">
                                <button type="button" title={viewPassword ? "hide password" : "show password"} onClick={() => setViewPassword(!viewPassword)} className="p-2 hover:bg-gray-200 cursor-pointer rounded-full ease-linear duration-150 flex items-center justify-center">
                                    {viewPassword ? <Eye size={20} /> : <EyeClosed size={20} /> }
                                </button>
                            </div>
                        </div>



                        <div className="py-2">
                            <div className="text-end">
                                <Link className="text-blue-800 underline" to={"#"}>Forgot Password ?</Link>
                            </div>
                        </div>

                    </div>

                    <div>
                        <Button disabled={isLoading} handleClick={() => login()} title="login" className="w-full px-4 py-2.5 cursor-pointer duration-300 ease-out disabled:bg-blue-400 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-600 text-white rounded flex items-center justify-center gap-2" children={
                            <>
                                {isLoading ? (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        <span>hold on tight...</span>
                                    </>
                                ) : "Login"}
                            </>
                        } />
                    </div>
                </div>
                

                {/*
                <p className="text-sm text-center text-gray-500 mt-4">
                Don’t have an account? <a href="/signup" className="text-blue-600 font-medium">Sign up</a>
                </p> */}
            </div>
        </div>

    )
}

export default Login