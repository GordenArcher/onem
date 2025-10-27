import FeatureCard from "../../components/FeatureCard"
import { Features } from "../../constant/data/main/home"
import Footer from "../../layout/main/footer"
import NavBar from "../../layout/main/header"
import Hero from "../../layout/main/Hero"

const Index = () => {
    return (
        <div className="w-full h-full relative">
            <section className="space-y-3.5 relative">
                <NavBar />

                <section className="max-w-7xl relative m-auto">
                    <div className="py-30">
                        <Hero />
                    </div>

                    <section className="py-12">
                        <div className="space-y-4 relative">
                            <div className="py-9">
                                <h1 className="font-bold text-3xl text-center">Discover What Makes Us Stand Out</h1>
                                <div className="pt-2">
                                    <p className="font-normal text-[18px]">Our platform is designed to simplify and secure the onboarding process. With powerful features like automated reminders, secure document submission, and personalized workflows, we ensure your team stays organized, efficient, and protected every step of the way.</p>
                                </div>
                            </div>

                            <div className="space-y-3.5 pt-3 relative">
                                <div className="w-full flex items-center justify-between gap-6">
                                    {Features.map(feature => <FeatureCard {...feature} />)}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section></section>
                </section>

                <div className="pt-30">
                    <Footer />
                </div>

                <p>hi</p>
                
            </section>
        </div>
    )
}

export default Index