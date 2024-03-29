import Image from "next/image";
import { type FC } from "react";
import GradientWrapper from "../global/gradient-wrapper";
import FreeTrialButton from "./free-trial";

const CTA: FC = () => (
	<section>
		<GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
			<div className="custom-screen relative py-28">
				<div className="relative z-10">
					<div className="mx-auto max-w-xl text-center">
						<h2 className="text-3xl font-semibold sm:text-4xl">
							Transform Your Event Sharing Today
						</h2>
						<p className="mt-5 p-1">
							With Vowsuite, effortlessly craft and share captivating, branded
							video galleries tailored to every audience. Begin creating lasting
							impressions now.
						</p>
					</div>
					<div className="mt-5 flex justify-center text-sm font-medium">
						<FreeTrialButton />
					</div>
				</div>

				<Image
					src="/images/bg-pattern.webp"
					className="pointer-events-none absolute inset-0 m-auto h-full w-full object-cover"
					alt="Background pattern"
					width={500}
					height={500}
				/>
			</div>
		</GradientWrapper>
	</section>
);

export default CTA;
