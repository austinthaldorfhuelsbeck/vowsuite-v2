import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			{props.children}
		</ClerkProvider>
	);
};

export default Layout;
