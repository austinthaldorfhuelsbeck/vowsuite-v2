import Image from "next/image";
import { type FC } from "react";
import GradientWrapper from "../wrappers/GradientWrapper";
import SectionWrapper from "../wrappers/SectionWrapper";

const testimonials = [
  {
    avatar: "/testimonial/user4.webp",
    name: "Mark Zuckerberg",
    title: "Founder of Meta",
    quote:
      "We've been using Vowsuite for almost a year now and are thoroughly impressed. Setting up video galleries is straightforward, and the analytics provide deep insights into viewer engagement.",
  },
  {
    avatar: "/testimonial/user4.webp",
    name: "Guillermo Rauch",
    title: "Founder of Vercel",
    quote:
      "Vowsuite has revolutionized how we share project videos with clients. Its user-friendly interface makes managing our video content a breeze.",
  },
  {
    avatar: "/testimonial/user4.webp",
    name: "Sidi Jeddou",
    title: "Founder of Float UI",
    quote:
      "For anyone seeking a powerful yet intuitive video sharing platform, I highly recommend Vowsuite. It has significantly streamlined our video sharing process.",
  },
  {
    avatar: "/testimonial/user4.webp",
    name: "Ghazbel",
    title: "Founder of ForceY",
    quote:
      "I'm extremely impressed with Vowsuite's intuitive platform and the seamless experience it offers. The customization options for video galleries are a game-changer.",
  },
  {
    avatar: "/testimonial/user4.webp",
    name: "Ana Khan",
    title: "Founder of Larax",
    quote:
      "Vowsuite is the best video hosting service I've ever used. It's incredibly simple to navigate, yet packed with powerful features for video management.",
  },
  {
    avatar: "/testimonial/user4.webp",
    name: "Ahmed Khasem",
    title: "Founder of Let's Code",
    quote:
      "Vowsuite is definitely the way to go for professional video sharing. I can't recommend it enough for its ease of use and comprehensive video management tools.",
  },
];

const Testimonial: FC = () => (
  <SectionWrapper id="testimonial">
    <div
      id="testimonials"
      className="custom-screen"
    >
      <div className="max-w-2xl text-center md:mx-auto">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Trusted by that guy Nate
        </h2>
      </div>
      <GradientWrapper
        wrapperClassName="max-w-sm h-40 top-12 inset-x-0"
        className="mt-12"
      >
        <ul className="grid gap-6 delay-300 duration-1000 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <li
              key={idx}
              className="rounded-xl border p-4"
              style={{
                backgroundImage:
                  "radial-gradient(100% 100% at 50% 50%, rgba(250, 154, 133, 0.05) 0%, rgba(124, 58, 237, 0) 100%)",
              }}
            >
              <figure className="flex h-full flex-col justify-between gap-y-6">
                <blockquote className="">
                  <p className="">{item.quote}</p>
                </blockquote>
                <div className="flex items-center gap-x-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                    width={56}
                    height={56}
                  />
                  <div>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="mt-0.5 block text-sm">{item.title}</span>
                  </div>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </GradientWrapper>
    </div>
  </SectionWrapper>
);

export default Testimonial;
