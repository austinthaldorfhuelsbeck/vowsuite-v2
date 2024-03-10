import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricingPlans } from "../../lib/constants";
import SectionWrapper from "../global/section-wrapper";

const mostPopPricingBg =
	"radial-gradient(130.39% 130.39% at 51.31% -0.71%, #8d99ab53 0%, rgba(31, 41, 55, 0) 100%)";

const Pricing = () => (
	<SectionWrapper id="pricing">
		<div className="relative mx-auto max-w-xl text-center">
			<h2 className="text-3xl font-semibold sm:text-4xl">
				Find a plan to power your business
			</h2>
		</div>

		<div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
			{pricingPlans.map((item, idx) => (
				<div
					key={idx}
					className={clsx(
						"relative mt-6 flex flex-1 flex-col items-stretch rounded-xl border sm:mt-0",
						{ "!border-primary": item.isMostPop },
					)}
					style={{
						backgroundImage: item.isMostPop ? mostPopPricingBg : "",
					}}
				>
					<div className="space-y-4 border-b p-8 text-center">
						<span className="font-medium text-[var(--peach-fuzz)]">
							{item.name}
						</span>
						<div className="text-3xl font-semibold">
							${item.price} <span className="text-xl font-normal">/mo</span>
						</div>
						<p className="">{item.desc}</p>
					</div>
					<div className="p-8">
						<ul className="space-y-3">
							{item.features.map((featureItem, idx) => (
								<li key={idx} className="flex items-center gap-5">
									<Check size={24} className="text-primary" />
									{featureItem}
								</li>
							))}
						</ul>
						<div className="pt-8">
							<Link href={`/agency?plan=${item.priceId}`}>
								<button
									className={clsx(
										"w-full text-center bg-primary p-2 rounded-md text-primary-foreground font-bold",
										{ "!bg-muted-foreground": !item.isMostPop },
									)}
								>
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	</SectionWrapper>
);

export default Pricing;
