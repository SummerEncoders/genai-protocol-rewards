# GenNFT Forge

---

GenNFT Forge is the perfect starting point to build your next NFT idea and to earn on-chain rewards even faster.

GenNFT Forge is a web application that allows you to enter prompts into a generative AI, and then create NFT Editions ready to be minted.

The end users are the owners of their own NFT smart contracts created via the Zora NFT Creator proxy.
They can manage their NFT editions, rewards and mint page in https://zora.co/manage (or https://testnet.zora.co/manage in the testnets)

This Project was made specifically for the Future of Blockchain University Hackathon by Encode Club.

It was planned, developed, and tested by the following team members of the SummerEncoders team:

https://github.com/matangolani

https://github.com/sina206

https://github.com/ivanmolto

## Live Demo

You can check a live demo of GenNFT Forge by going to https://www.gennfts.xyz or just clicking [here](https://www.gennfts.xyz)

## Video Pitch

You can watch a video pitch of GenNFT Forge by going to or just clicking [here]()

## How it works:

1.  Connect your wallet
2.  Enter a prompt
3.  Create an NFT edition (smart contract)

### 1.

In order to get started the user must connect a wallet. This is done via RainbowKit, a React library that allows you to easily add wallet connection to your dapp.

### 2.

Once your wallet is connected, you can then enter any prompt to StableDiffusion (a text-to-image diffusion model capable of generating photo-realistic images given any text input) via its API.

### 3.

The application then calls the Zora NFT Creator Proxy with some dynamic and static data including the image url from Stable Diffusion and the prompt as the NFT description. Once the NFT Edition is created you can manage it from the Zora Manage dashboard (https://zora.co/manage or https://testnet.zora.co/manage) including a minting page.

## Benefits:

- Showcase ENS name and avatar.

GenNFT Forge showcase the ENS name and avatar of an wallet address in case it has it has an ENS name associated. We do it not only in Ethereum but in the Superchain too (OP, Base and Zora blockchains).

As an extra bonus we thought to whitelist the use of our web app only to wallets with ENS names but it was only possible for the Ethereum Mainnet (in our case via RainbowKit).
Whitelisting the use of our service for minting NFTs to wallet addresses with an ENS name would significantly enhance the security and trustworthiness of the platform. And promoting us as a Paymaster/sponsor of the service to all the ENS community.

ENS names are Ethereum domain names that map to blockchain addresses.
Whitelisting ENS names would reduces the potential likelihood of fraudulent activities and draining economic resources.

- Creative Expression

The app empowers users to express their creativity by providing them with a tool to generate unique images based on their prompts. Users can experiment with various inputs to produce diverse and imaginative artworks.

- Zora Protocol Rewards

With Zora Protocol Rewards, users enjoy a seamless and transparent on-chain earning experience, ensuring security and trust through direct blockchain interactions. This empowers participants with ownership and control over their rewards, fostering a decentralized and user-centric ecosystem.

## Step by step guide:

### 1. Connect Wallet

![home](./presentation/welcome.png "home page")

### 2. Enter Prompt

![adding wallet](./presentation/wallet.png "adding wallet")

### 3. Press "I'm Feeling Lucky" Button

![entering prompt](./presentation/prompt.png "entering prompt")

### 4. "Press Create NFT" Button

![generating image](./presentation/gen.png "generating image")

### 5. Confirm Transaction Fees

![pressing mint NFT button](./presentation/mint.png "pressing mint NFT button")

### 6. Manage images on minting page

![minting page](./presentation/zora.png "minting page")

## Tech stack

GenNFT Forge uses [Stable Diffusion](https://stability.ai/blog/stable-diffusion-public-release) and the [Zora](https://zora.co) NFT ERC721 Editions NFT creator on the Ethereum Mainnet, OP Mainnet, Base, and Zora (including their testnets).

It is built using [NextJS](https://nextjs.org), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [RainbowKit](https://www.rainbowkit.com), [Wagmi](https://wagmi.sh), and [Tailwind CSS](https://tailwindcss.com/).

## Set Up

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

The code is licensed under a MIT License.
