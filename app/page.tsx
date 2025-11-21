import Hero from "../components/sections/Hero";
import Integrations from "../components/sections/Integrations";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import { Pricing } from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Integrations />
            <Services />
            <Process />
            <Pricing />
            <Testimonials />
            <CTA />
        </div>
    );
}
