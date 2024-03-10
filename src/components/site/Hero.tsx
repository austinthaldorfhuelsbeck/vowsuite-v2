import Image from "next/image";
import GradientWrapper from "../global/gradient-wrapper";
import FreeTrialButton from "./free-trial";

const Hero = () => (
	<section>
		<div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 pt-24 md:flex md:px-8">
			<div className="max-w-2xl flex-none space-y-5">
				<a
					href="javascript:void(0)"
					className="inline-flex items-center gap-x-6 rounded-full border border-primary p-1 pr-6 text-sm font-medium duration-250 hover:bg-primary/10"
				>
					<span className="inline-block rounded-full bg-primary px-3 py-1 dark:text-background">
						News
					</span>
					<p className="flex items-center">Read the launch post →</p>
				</a>
				<h1 className="text-4xl font-extrabold sm:text-5xl">
					Capture, curate, celebrate. <br /> Your events, elevated.
				</h1>
				<h1 className="text-4xl font-extrabold sm:text-5xl"></h1>
				<p>
					Vowsuite is the seamless video gallery platform where every event is
					transformed into a shared, unforgettable journey.
				</p>
				<div className="flex items-center gap-x-3 sm:text-sm">
					<FreeTrialButton />
				</div>
			</div>

			<div className="hidden flex-1 md:inline-flex">
				<Image
					src="/images/camera.svg"
					className="max-w-xl"
					width={500}
					height={500}
					alt="Stylized person standing next to a camera"
				/>
			</div>
		</div>
		<GradientWrapper
			className="mt-10 p-10"
			wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
		>
			<Image
				src="/images/screenshot.png"
				className="rounded-2xl shadow-lg mx-auto"
				alt="Vowsuite UI"
				width={1440}
				height={800}
			/>
		</GradientWrapper>
	</section>
);

export default Hero;
