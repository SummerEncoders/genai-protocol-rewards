import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("/placeholder.png");
  const [luckyButtonStatus, setLuckyButtonStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageText, setImageText] = useState("");

  const handlePromptChange = (event: any) => {
    // Update prompt
    setPrompt(event.target.value);
    // If the prompt is empty, disable the 'I'm feeling lucky button'
    if (!event.target.value.trim()) {
      setLuckyButtonStatus(true);
    }
    // If the prompt isnt empty, enable the 'I'm feeling lucky button'
    if (event.target.value.trim()) {
      setLuckyButtonStatus(false);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    // Generate image - TODO: put generate image code into its own function
    const response = await fetch("/api/stablediffusion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: prompt }),
    });

    if (response.ok) {
      const data = await response.json();
      setImageUrl(data[0]);
    } else {
      console.error("Error:", response.statusText);
    }
    setLoading(false);
    setImageText(prompt);
    setPrompt("");
  };

  const mintNFT = () => {
    // TODO
    return null;
  };

  return (
    <div className="bg-white">
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
            {
              <div className="mt-32 mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                    Mint Your Dreams
                    <br /> Earn Protocol Rewards
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <br />
                    <span className="hidden sm:block">
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </p>
                </div>
              </div>
            }

            {
              <div className="-mt-16 sm:-mt-24 mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
                <div className="text-center">
                  <form className="mt-2" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="prompt"
                      value={prompt}
                      onChange={handlePromptChange}
                      id="prompt"
                      className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter a prompt to display an image"
                    />

                    <div className="mt-4 flex items-center justify-center gap-x-6">
                      <button
                        type="submit"
                        disabled={luckyButtonStatus}
                        className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        I&#39;m Feeling Lucky
                      </button>
                      <button
                        onClick={mintNFT}
                        disabled={true}
                        className="rounded-xl bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Mint NFT
                      </button>
                    </div>
                  </form>
                </div>
                {loading && (
                  <div className="mt-12 flex justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
                  </div>
                )}
                {imageUrl && !loading && (
                  <div className="truncate">
                    <div className="mt-8 flex justify-center aspect-square relative">
                      <Image
                        src={imageUrl}
                        alt="NFT"
                        priority
                        width="1024"
                        height="1024"
                        style={{
                          width: "75%",
                          height: "75%",
                        }}
                        className="rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="text-center -mt-32 text-lg leading-8 text-gray-600 italic mb-16 text-ellipsis overflow-hidden">
                      {imageText}
                    </div>
                  </div>
                )}
                <style jsx>{`
                  .loader {
                    animation: spin 1s linear infinite;
                    border-top-color: #4f46e5;
                  }

                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}</style>
              </div>
            }

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
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
