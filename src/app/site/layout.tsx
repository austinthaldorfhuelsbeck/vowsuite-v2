import Footer from "@/components/site/footer";
import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { type PropsWithChildren } from "react";

const layout = (props: PropsWithChildren) => {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<main className="flex flex-col">
				<Navigation />
				{props.children}
				<Footer />
			</main>
		</ClerkProvider>
	);
};

export default layout;
