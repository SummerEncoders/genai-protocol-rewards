import {
  BanknotesIcon,
  BoltIcon,
  FaceSmileIcon,
  FingerPrintIcon,
  LockClosedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Text-to-image generation",
    description:
      "The latest and most powerful version of Stable Diffusion it is just a prompt from you.",
    icon: SparklesIcon,
  },
  {
    name: "Red Carpet to ENS",
    description:
      "Only ENS names are whitelisted. If your address has an ENS name, we sponsor the service.",
    icon: FaceSmileIcon,
  },
  {
    name: "Creator Friendly",
    description:
      "Powering the creators and dreamers with a fast, free, and straightforward service.",
    icon: BoltIcon,
  },
  {
    name: "Monetize Your Work",
    description:
      "With Protocol Rewards we provide the best experience to create and earn onchain.",
    icon: BanknotesIcon,
  },
  {
    name: "Secure and Cheap Smart Contracts",
    description:
      "On-chain modular rendering architecture and ERC721A Gas savings / linear mint.",
    icon: LockClosedIcon,
  },
  {
    name: "Hacking Ethereum and the Superchain",
    description:
      "Service available in Ethereum Mainnet, OP Mainnet, Base, Zora, and their respective testnets.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 mb-64">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to mint your dream
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
