import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicTestimonialCard from "@/components/MusicTestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.2] antialiased">

    <HeroSection/>
    <FeaturedCourses/>
    <WhyChoseUs/>
    <MusicTestimonialCard/>
    <UpcomingWebinars/>
    <Instructor/>
    <Footer/>
    </main>
  );
}
