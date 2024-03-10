import { type FC } from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

const plans = [
  {
    name: "Basic Plan",
    desc: "Perfect for new videographers",
    price: 0,
    isMostPop: false,
    features: [
      "Unlimited video uploads",
      "Customizable Templates",
      "Basic Analytics",
      "Public Galleries",
      "Download Permissions",
      "Email Support",
    ],
  },
  {
    name: "Pro Plan",
    desc: "Ideal for professionals",
    price: 12,
    isMostPop: true,
    features: [
      "Unlimited video uploads",
      "Advanced Customization",
      "Detailed Analytics",
      "Private Galleries",
      "Client Feedback Tools",
      "Priority Email Support",
    ],
  },
  {
    name: "Business Plan",
    desc: "Built for studios and agencies",
    price: 32,
    isMostPop: false,
    features: [
      "All features in Pro Plan",
      "Branded Client Portals",
      "Multi-User Access",
      "Cloud Storage",
      "Custom Domain",
      "Dedicated Support",
    ],
  },
];

const mostPopPricingBg =
  "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #8d99ab53 0%, rgba(31, 41, 55, 0) 100%)";

const Pricing: FC = () => (
  <SectionWrapper id="pricing">
    <div className="relative mx-auto max-w-xl text-center">
      <h2 className="text-3xl font-semibold sm:text-4xl">
        Find a plan to power your business
      </h2>
    </div>

    <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
      {plans.map((item, idx) => (
        <div
          key={idx}
          className={`relative mt-6 flex flex-1 flex-col items-stretch rounded-xl border sm:mt-0 ${item.isMostPop ? "border border-[var(--peach-fuzz)]" : ""}`}
          style={{
            backgroundImage: item.isMostPop ? mostPopPricingBg : "",
          }}
        >
          <div className="space-y-4 border-b p-8 text-center">
            <span className="font-medium text-[var(--peach-fuzz)]">
              {item.name}
            </span>
            <div className="text-3xl font-semibold">
              ${item.price}{" "}
              <span className="text-xl font-normal">
                /mo
              </span>
            </div>
            <p className="">{item.desc}</p>
          </div>
          <div className="p-8">
            <ul className="space-y-3">
              {item.features.map((featureItem, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--peach-fuzz)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {featureItem}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <button
                className={`w-full rounded-full px-4 py-2.5 text-center text-sm font-medium ring-offset-2 duration-150 focus:ring ${item.isMostPop ? "bg-[var(--peach-fuzz)] ring-[var(--peach-fuzz)] hover:bg-[var(--peach-puree)] focus:bg-[var(--peach-puree)]" : "bg-stone-800 text-stone-200 ring-stone-800 hover:bg-stone-700"}`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);


export default Pricing;
