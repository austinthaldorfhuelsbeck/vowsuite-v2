import Footer from "@/components/site/footer";
import Navigation from "@/components/site/navigation";
import { type PropsWithChildren } from "react";

const layout = (props: PropsWithChildren) => {
	return (
		<main className="flex flex-col">
			<Navigation />
			{props.children}
			<Footer />
		</main>
	);
};

export default layout;
