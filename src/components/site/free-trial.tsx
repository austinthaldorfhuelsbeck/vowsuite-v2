import Link from "next/link";

const FreeTrialButton = () => {
	return (
		<Link
			href="/agency"
			className="bg-primary py-1 px-2 my-auto rounded hover:bg-primary/10 hover:text-primary transition-all text-sm font-semibold dark:text-background dark:hover:text-primary dark:hover:bg-primary/10 border border-primary duration-250"
		>
			Start your free trial →
		</Link>
	);
};

export default FreeTrialButton;
