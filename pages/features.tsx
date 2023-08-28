import Head from "next/head";
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
    name: "ENS friendly",
    description:
      "If your address has an ENS name, we showcase your ENS name and avatar.",
    icon: FaceSmileIcon,
  },
  {
    name: "Powering Creators",
    description:
      "Powering the creators and dreamers with a fast, free, and straightforward service.",
    icon: BoltIcon,
  },
  {
    name: "Monetize Your Work",
    description:
      "With Zora Protocol Rewards we provide the best experience to earn onchain.",
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
      "Service available in Ethereum Mainnet, OP Mainnet, Base, Zora, and testnets.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | GenNFTs</title>
        <meta
          name="description"
          content="Forge Your Dreams and Earn Protocol Rewards"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://gennfts.xyz/features" />
      </Head>
      <div className="bg-white py-24 sm:py-24 mb-64 mt-24">
        <main>
          <div className="relative isolate">
            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything you need to mint your dream
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Rapidly build your NFT project. Beautifully designed, and
                    expertly crafted. Web3 knowledge not required.
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
                <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                aria-hidden="true"
              >
                <div
                  className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                  style={{
                    clipPath:
                      "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
