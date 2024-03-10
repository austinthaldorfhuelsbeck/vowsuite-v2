import CTA from "@/components/site/CTA";
import Features from "@/components/site/Features";
import Hero from "@/components/site/Hero";
import Pricing from "@/components/site/Pricing";
import Testimonial from "@/components/site/Testimonial";
import VisualFeatures from "@/components/site/VisualFeatures";

const Home = () => {
	return (
		<>
			<Hero />
			<VisualFeatures />
			<Features />
			<Pricing />
			<Testimonial />
			<CTA />
		</>
	);
};

export default Home;
