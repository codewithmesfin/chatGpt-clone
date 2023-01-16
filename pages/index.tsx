/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Head from "next/head";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <Head>
        <title>EtyopChat</title>
        <meta
          name="description"
          content="We are dedicated to creating the highest quality software products with exceptional brands of any size. Our goal is to consistently provide our customers with extraordinary services, offering fast, reliable turn arounds with low minimums and high volume capacity"
          key="desc"
        />
      </Head>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto w-full md:max-w-3xl md:p-10">
            <div>
              <div className="py-5 pb-10">
                <h1 className="text-center font-extrabold text-blue-600 text-4xl md:text-6xl">EtyopChat</h1>
              </div>
              <div className="mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Alternative to ChatGPT
                    <Link
                      href="/chat"
                      className="font-semibold pl-3 text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Try it now <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-center sm:text-6xl">
                ChatGPT:  Optimizing language models for dialogue
                </h1>
                <p className="mt-6 md:text-lg leading-8 text-gray-600 sm:text-center">
                  The team at OpenAI trained a model called ChatGPT which
                  interacts in a conversational way. The dialogue format makes
                  it possible for ChatGPT to answer followup questions, admit
                  its mistakes, challenge incorrect premises, and reject
                  inappropriate requests. ChatGPT is a sibling model to
                  InstructGPT, which is trained to follow an instruction in a
                  prompt and provide a detailed response.
                </p>
                <div className="mt-8 flex md:gap-x-4 justify-evenly">
                  <Link
                    href="/chat"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started{" "}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="https://openai.com/blog/"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Learn more
                    <span className="text-gray-400 pl-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>


                <div className="mt-8">
                 <p className="text-center text-sm text-blue-400">
                  This chat-bot is designed for those who are not able to access ChatGPT or other OpenAI Features in Ethiopia.
                  API integration and UI customization by:
                 </p>
                 <div className="flex justify-evenly p-2">
                 <Link href="https://bizenforce.vercel.app" className="text-blue-600 text-xs md:text-lg font-semibold">Mesfin Tsegaye</Link>
                 <Link href="https://www.linkedin.com/in/mesfin-tsegaye" className="text-blue-600 text-xs md:text-lg font-semibold">LinkedIn</Link>
                 <Link href="https://github.com/sciemesfin" className="text-blue-600 text-xs md:text-lg font-semibold">GitHub</Link>
                 </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>


              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
