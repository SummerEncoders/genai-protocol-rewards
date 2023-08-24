import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex flex-row">
            <span className="sr-only">App Name</span>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <span className="text-indigo-600 ml-1 mt-2 text-2xl hidden h-10 w-auto sm:block"></span>
          </a>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <ConnectButton accountStatus={"address"} />
          </div>
        </div>
      </nav>
    </header>
  );
}