import { PlayCircle, Star } from 'lucide-react'
import HeroImage from '../../assets/images/hero.jpg'
import { CompanyRating } from '../../constant/data/main/home'
import Button from '../../components/shared/ui/Button'

const Hero = () => {

    return (
        <div className="w-full h-full relative">
            <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-3.5 relative">
                <div className="w-full h-full">
                    <div className='flex items-start flex-col gap-4 relative'>
                        <div className='space-y-13'>
                            <div className='space-y-6 relative'>
                                <h1 className='font-bold text-5xl max-md:text-3xl text-[#002152]'>Onboarding and Document Management Made Easy</h1>

                                <p className='font-normal text-[18px]'>Simplify onboarding workflows, automate notifications, and ensure secure document submission—all in one place.</p>
                            </div>

                            <div className='flex items-center gap-2.5'>
                                <Button handleClick={() => alert()} title='get started' className="px-7 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded duration-150 ease-out cursor-pointer" children={"Get started"} />

                                 <Button handleClick={() => alert()} title='get started' className="px-10 py-3 bg-transparent border border-blue-600  text-blue-600 rounded duration-150 ease-out cursor-pointer flex items-center gap-2.5" children={
                                    <>
                                        <PlayCircle size={20} />
                                        <span>Watch a Video</span>
                                    </>
                                 } />
                            </div>
                        </div>

                        <div className='w-full pt-4 py-1'>
                            <div className='flex items-center justify-center gap-3.5'>
                                {CompanyRating.map(rat => {
                                    return <div key={rat.id} className='w-full h-full relative p-1'>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <img className='w-[90px] h-[62]' draggable={false} src={rat.image} alt={rat.text} />
                                            </div>

                                            <div className='flex flex-col justify-between gap-2'>
                                                <h2 className='text-[#000000] font-normal text-[18px]'>{rat.text}</h2>

                                                <div className='flex items-center gap-1'>
                                                    <div className='flex items-center gap-1'>
                                                        {rat.ratingStar.map((st) => ( <Star size={10} color='#0052CC' key={st} fill='#0052CC' />))}
                                                    </div>

                                                    <div className='h-4 w-0.5 bg-gray-400 block'></div>

                                                    <div>
                                                        <p className='text-[#525252] font-normal text-sm'>{rat.ratings_number}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full">
                    <div className="relative h-full">
                        <img src={HeroImage} loading='lazy' className='w-full h-full object-cover rounded-2xl' alt="hero image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero