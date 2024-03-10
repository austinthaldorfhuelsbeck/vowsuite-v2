import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import FreeTrialButton from "../free-trial";

type Props = {
	user?: User;
};

// Navigation configuration
const navigation = [
	{ title: "Features", href: "#features" },
	{ title: "Pricing", href: "#pricing" },
	{ title: "Customers", href: "#testimonial" },
];

const LoginButton = () => (
	<Link
		href="/agency"
		className="py-1 px-2 my-auto rounded hover:bg-primary/10 hover:text-primary transition-all text-sm font-semibold"
	>
		Log in
	</Link>
);

const Navigation = ({ user }: Props) => {
	return (
		<header className="p-4 flex items-center justify-between relative">
			<aside className="px-5">
				<Link href="/" className="flex gap-2 items-center">
					<Image
						src={"./assets/logo.svg"}
						alt="Vowsuite"
						width={24}
						height={24}
					/>
					<span className="font-bold">Vowsuite</span>
				</Link>
			</aside>

			<nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
				<ul className="flex gap-6 justify-center items-center">
					{navigation.map((item, index) => (
						<li key={index}>
							<Link
								href={item.href}
								className="rounded px-2 py-1 font-light text-sm hover:bg-primary/10 transition-all hover:text-primary"
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<aside className="flex gap-2">
				<LoginButton />
				<FreeTrialButton />
				<UserButton />
			</aside>
		</header>
	);
};

export default Navigation;
