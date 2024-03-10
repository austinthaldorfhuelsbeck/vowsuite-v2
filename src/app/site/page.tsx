import CTA from "@/components/site/cta";
import Features from "@/components/site/features";
import Hero from "@/components/site/hero";
import Pricing from "@/components/site/pricing";
import Testimonial from "@/components/site/testimonial";
import VisualFeatures from "@/components/site/visual-features";

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
