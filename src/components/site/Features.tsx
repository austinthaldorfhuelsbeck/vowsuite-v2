import SectionWrapper from "../wrappers/SectionWrapper";

const featuresList = [
  {
    // icon: <CursorArrowRaysIcon className="h-8 w-8 text-white" />,
    title: "Customized Galleries",
    desc: "Craft galleries tailored to each event, ensuring a unique and personalized showcase for your clients.",
  },
  {
    // icon: <PhotoIcon className="h-8 w-8 text-white" />,
    title: "Branded Experience",
    desc: "Incorporate your logo and brand colors, providing a cohesive viewing experience across all videos.",
  },
  {
    // icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-white" />,
    title: "Direct Feedback Channels",
    desc: "Enable real-time feedback on your videos, allowing for immediate client interaction and satisfaction.",
  },
  {
    // icon: <ShareIcon className="h-8 w-8 text-white" />,
    title: "Easy Sharing & Downloads",
    desc: "Effortlessly share galleries with clients and enable easy video downloads for personal use.",
  },
  {
    // icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
    title: "Client-Specific Access",
    desc: "Control who sees your work with client-specific access, ensuring privacy and exclusivity.",
  },
  {
    // icon: <BuildingStorefrontIcon className="h-8 w-8 text-white" />,
    title: "Integrate with Social Platforms",
    desc: "Easily share your video galleries on social media, expanding your reach and engagement.",
  },
];

const Features = () => (
  <SectionWrapper>
    <div
      id="features"
      className="custom-screen"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Start enhancing your event videography with Vowsuite.
        </h2>
        <p className="mt-3">
          Vowsuite simplifies creating and sharing professional video
          galleries that capture attention, enabling you to monitor
          engagement, and foster client relationships.
        </p>
      </div>
      <div className="relative mt-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((item, idx) => (
            <li
              key={idx}
              className="space-y-3 rounded-xl border p-4"
              style={{
                background:
                  "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(106, 110, 116, 0.2) 0%, rgba(203, 213, 225, 0) 100%)",
              }}
            >
              {/* <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 text-gray-50">
                {item.icon}
              </div> */}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default Features;
