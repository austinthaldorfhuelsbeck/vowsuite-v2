import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import GradientWrapper from "../wrappers/GradientWrapper";

const Hero = () => (
  <section>
    <div className="mx-auto max-w-screen-xl gap-12 overflow-hidden px-4 pt-24 md:flex md:px-8">
      <div className="max-w-2xl flex-none space-y-5">
        <a
          href="javascript:void(0)"
          className="inline-flex items-center gap-x-6 rounded-full border border-[var(--peach-fuzz)] p-1 pr-6 text-sm font-medium duration-150"
        >
          <span className="inline-block rounded-full bg-[var(--peach-fuzz)] px-3 py-1">
            News
          </span>
          <p className="flex items-center">
            Read the launch post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </p>
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
          <SignUpButton redirectUrl="/studio">
            <button className="rounded bg-[var(--peach-fuzz)] px-2 py-1 text-sm font-semibold shadow hover:bg-[var(--peach-puree)] ">
              Start your free trial →
            </button>
          </SignUpButton>
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
        className="rounded-2xl shadow-lg"
        alt="Vowsuite UI"
        width={1440}
        height={800}
      />
    </GradientWrapper>
  </section>
);

export default Hero;
