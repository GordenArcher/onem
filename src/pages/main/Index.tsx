import FAQ from "../../layout/main/FAQ";
import FeaturesSection from "../../layout/main/FeaturesSection";
import Footer from "../../layout/main/footer";
import NavBar from "../../layout/main/header";
import Hero from "../../layout/main/Hero";

const Index = () => {
  return (
    <div className="w-full h-full relative">
      <section className="space-y-3.5 relative">
        <NavBar />

        <section className="max-w-7xl relative m-auto">
          <div className="py-30">
            <Hero />
          </div>

          <FeaturesSection />

          <section></section>
        </section>

        <FAQ />

        <div className="pt-30">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Index;
