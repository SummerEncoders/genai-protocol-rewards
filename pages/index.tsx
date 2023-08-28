import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { zoraNftCreatorV1Config } from "@zoralabs/zora-721-contracts";
import {
  useAccount,
  useChainId,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [assetName, setAssetName] = useState<string>("");
  const [symbolName, setSymbolName] = useState<string>("");
  const [nftDescription, setNftDescription] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("/placeholder.png");
  const [luckyButtonStatus, setLuckyButtonStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageText, setImageText] = useState("");

  const { address } = useAccount();
  const chainId = useChainId();

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

    const response = await fetch("api/stablediffusion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: prompt }),
    });

    let prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      setAssetName(prediction.id.toUpperCase());
      setSymbolName(prediction.id.toUpperCase().slice(3));

      const response = await fetch("/api/stablediffusion/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }

    setImageUrl(prediction.output[prediction.output.length - 1]);
    setLoading(false);
    setImageText(prompt);
    setNftDescription(prompt);
    setPrompt("");
    setLuckyButtonStatus(false);
  };

  // Providing the mint contract information

  const contractName = assetName;
  const symbol = symbolName;
  const editionSize = 9999n;
  const royaltyBps = 0;
  const fundsRecipient = address!;
  const defaultAdmin = address!;
  const description = nftDescription;
  const animationUri = "0x0";
  const imageUri = imageUrl;
  const maxSalePurchasePerAddress = 4294967295;
  const createReferral = address!;

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    /* Address of the Zora Creator Proxy contract on the Ethereum and 
    OP Superchain (OP Mainnet, Base, and Zora by now)
    */

    // @ts-ignore
    address: zoraNftCreatorV1Config.address[chainId],
    abi: zoraNftCreatorV1Config.abi,
    // Function on the contract
    functionName: "createEditionWithReferral",

    args: [
      contractName,
      symbol,
      editionSize,
      royaltyBps,
      fundsRecipient,
      defaultAdmin,
      {
        maxSalePurchasePerAddress,
        presaleEnd: 0n,
        presaleStart: 0n,
        presaleMerkleRoot:
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        // max value for end date, results in no end date for mint
        publicSaleEnd: 18446744073709551615n,
        publicSalePrice: 0n,
        publicSaleStart: 0n,
      },
      description,
      animationUri,
      imageUri,
      createReferral,
    ],
  });

  // Writing to the mint contract
  const {
    data: contractWriteData,
    isSuccess,
    isLoading: isContractWriteLoading,
    write,
    error: contractWriteError,
  } = useContractWrite(config);

  return (
    <>
      <Head>
        <title>GenNFTs</title>
        <meta
          name="description"
          content="Forge Your Dreams and Earn Protocol Rewards"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://gennfts.xyz" />
      </Head>
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
              <div className="mt-24 mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
                <div className="text-center">
                  <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                    Forge Your Dreams
                    <br /> Earn Protocol Rewards
                  </div>
                  <div className="mt-6 text-lg leading-8 text-gray-600">
                    The perfect starting point to build your next NFT idea
                    <br />
                    <span className="hidden sm:block">
                      and to earn on-chain rewards even faster.{" "}
                      <Link href="/features">
                        <div className="text-indigo-500 hover:text-indigo-600">
                          Learn more <span aria-hidden="true">→</span>
                        </div>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
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
                    </div>
                  </form>
                  {error && <div>{error}</div>}
                  {nftDescription !== "" && (
                    <button
                      onClick={() => write?.()}
                      disabled={!write}
                      className="mt-8 rounded-xl bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Create NFT
                    </button>
                  )}
                  <div className="text-sm italic text-gray-600">
                    {prediction && (
                      <p className="mt-2 mb-2">status: {prediction.status}</p>
                    )}
                    {isSuccess && chainId === 1 && (
                      <a
                        target="_blank"
                        href={`https://etherscan.io/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 5 && (
                      <a
                        target="_blank"
                        href={`https://goerli.etherscan.io/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 8453 && (
                      <a
                        target="_blank"
                        href={`https://basescan.org/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 84531 && (
                      <a
                        target="_blank"
                        href={`https://goerli.basescan.org/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 10 && (
                      <a
                        target="_blank"
                        href={`https://optimistic.etherscan.io/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 420 && (
                      <a
                        target="_blank"
                        href={`https://goerli-optimism.etherscan.io/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 999 && (
                      <a
                        target="_blank"
                        href={`https://testnet.explorer.zora.energy/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    {isSuccess && chainId === 7777777 && (
                      <a
                        target="_blank"
                        href={`https://explorer.zora.energy/tx/${contractWriteData?.hash}`}
                        rel="noreferrer"
                      >
                        <span className="text-indigo-500 hover:text-indigo-600">
                          View Transaction{" "}
                        </span>
                      </a>
                    )}
                    <div className="mt-2"></div>
                    {isSuccess &&
                      (chainId === 1 ||
                        chainId === 8453 ||
                        chainId === 10 ||
                        chainId === 999) && (
                        <a
                          target="_blank"
                          href="https://zora.co/manage"
                          rel="noreferrer"
                        >
                          <span className="text-indigo-500 hover:text-indigo-600">
                            Manage your NFT Edition in the dashboard{" "}
                          </span>
                          <span
                            className="text-indigo-500
                          hover:text-indigo-600"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </a>
                      )}

                    {isSuccess &&
                      (chainId === 5 ||
                        chainId === 84531 ||
                        chainId === 420 ||
                        chainId === 7777777) && (
                        <a
                          target="_blank"
                          href="https://testnet.zora.co/manage"
                          rel="noreferrer"
                        >
                          <span className="text-indigo-500 hover:text-indigo-600">
                            Manage your NFT Edition in the dashboard{" "}
                          </span>
                          <span
                            className="text-indigo-500
                          hover:text-indigo-600"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </a>
                      )}
                  </div>
                  {error && <div>{error}</div>}
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
                        alt="output"
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
    </>
  );
}
