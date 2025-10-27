import { Link } from "react-router-dom"
import Logo from "../../components/shared/Logo"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <div className="w-full h-[344px] bg-[#E0EDFF]">
            <div className="max-w-7xl p-15 relative flex max-md:flex-col items-center justify-between">
                <div className="space-y-8 max-w-[380px]">
                    <Logo />

                    <div>
                        <p className="text-[18px] text-[#525252] font-normal">Onem is the leading employee onboarding tool for organizations</p>
                    </div>
                </div>

                <div className="flex gap-7 max-md:flex-col">
                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-[#1F1F1F] text-xl font-semibold">Company Info</h2>

                        <div className="flex flex-col items-start gap-2">
                            <>
                                <Link to={"#"} className="text-[#525252] text-[18px] font-normal">
                                    About Us
                                </Link>

                                <Link to={"#"} className="text-[#525252] text-[18px] font-normal">
                                    Careers
                                </Link>

                                <Link to={"#"} className="text-[#525252] text-[18px] font-normal">
                                    Contact
                                </Link>
                            </>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-[#1F1F1F] text-xl font-semibold">Helpful Links</h2>

                        <div className="flex flex-col items-start gap-2">
                            <>
                                <Link to={"#"} className="text-[#525252] text-[18px] font-normal">
                                    Privacy Policy
                                </Link>

                                <Link to={"#"} className="text-[#525252] text-[18px] font-normal">
                                    Terms of Service
                                </Link>
                            </>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3.5">
                        <h2 className="text-[#1F1F1F] text-xl font-semibold">Social Media Links</h2>

                        <div className="flex items-center gap-2">
                            <Link to={"#"} className="w-10 h-10">
                                <Facebook color="#525252" />
                            </Link>

                            <Link to={"#"} className="w-10 h-10">
                                <Instagram color="#525252" />
                            </Link>

                            <Link to={"#"} className="w-10 h-10">
                                <Twitter color="#525252" />
                            </Link>

                            <Link to={"#"} className="w-10 h-10">
                                <Youtube color="#525252" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer