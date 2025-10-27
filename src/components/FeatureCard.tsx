import { Link } from "react-router-dom"
import type { FeaturesTypes } from "../types/home/shared"


const FeatureCard = ({ icon: Icon, head, description, bg, color }: FeaturesTypes) => {
    const backgrounfC = `bg-[${bg}]`

    return (
        <div className="w-full h-full p-4 rounded border border-[#E8E8E8]">
            <div className="flex items-start justify-between flex-col gap-8">
                <div className={`w-[64px] h-[64px] rounded-full flex items-center justify-center ${backgrounfC}`}>
                    <Icon color={color} />
                </div>

                <div className="py-1">
                    <h2 className="font-semibold text-xl text-[#1F1F1F]">{head}</h2>
                </div>

                <div className="relative">
                    <span className="text-[18px] font-normal leading-0">{description}</span>
                </div>

                <Link to={"#"} className="text-blue-600 underline">Learn more</Link>
            </div>
        </div>
    )
}

export default FeatureCard