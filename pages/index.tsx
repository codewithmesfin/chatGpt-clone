/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Index() {
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

      <>
        {/* component */}
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 py-20 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-blue-600 leading-none md:text-5xl xl:text-6xle">
                Powerful Chatbot for AI lovers
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                A simple AI powered chat-bot developed by utilizing the OpenAI
                Chat API endpoint. This technology enables developers to create
                interactive, natural language-based conversations with users.
                The simplest alternative to
                <Link
                  href="https://chat.openai.com"
                  target="_blank"
                  className="text-blue-600 font-bold"
                >
                  {" "}
                  ChatGPT
                </Link>{" "}
                (Optimizing language models for dialogue)
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mesfin-tsegaye"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Developer
              </Link>
            </div>
            <div className="hidden items-end justify-center lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/i1.png" alt="mockup" className="max-h-[450px]" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                I did not reinvent the chatbot
              </h2>
              <p className="mb-4">
                I just developed the interface logic and connected with the
                OpenAI chat endpoint. I made this system to make the ChatGPT
                service available in Africa. This chatbot is designed to
                understand and respond to user input in real-time by leveraging
                a combination of machine learning algorithms, natural language
                processing, and semantic understanding.
              </p>
              <p>
                By using this technology, developers can create a powerful
                AI-driven conversational AI agent that can engage users in
                meaningful conversations and provide personalized responses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="/i2.avif"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/i3.avif"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800">
          <div className="py-8 md:flex md:space-x-20 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="w-full md:w-1/2 text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                Building next-gen apps with{" "}
                <Link
                  href="https://openai.com/"
                  className="font-extrabold text-blue-600"
                >
                  OpenAI’s
                </Link>{" "}
                powerful models.
              </h2>
              <p className="mb-4 font-light">
                The team at OpenAI trained a model called ChatGPT which
                interacts in a conversational way. The dialogue format makes it
                possible for ChatGPT to answer followup questions, admit its
                mistakes, challenge incorrect premises, and reject inappropriate
                requests. ChatGPT is a sibling model to InstructGPT, which is
                trained to follow an instruction in a prompt and provide a
                detailed response.
              </p>
              <Link
                href="https://openai.com"
                target="_blank"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                Learn more
                <svg
                  className="ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full md:w-1/2 ">
              <h1 className="text-xl py-2 md:text-7xl text-center md:text-left text-blue-600 font-extrabold pb-10">
                The developer
              </h1>
              <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                  width={150}
                  height={170}
                  src="/mesfin.jpg"
                  alt="developer"
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-xl py-2 md:text-2xl font-semibold">
                    Mesfin Tsegaye
                  </h1>
                  <p className="text-sm md:text-md">
                    Software Engineer with 5 years of experience as a Full
                    stack developer in international companies. Mesfin loves
                    Programming; studying real world problems and looking for a
                    better solution.
                  </p>
                  <div className="flex justify-between items-center space-2 pt-2">
                    <Link
                      href="https://bizenforce.vercel.app"
                      className="hover:underline"
                    >
                      View profile on:
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/mesfin-tsegaye"
                      className="text-blue-600 hover:text-blue-900 dark:hover:text-white text-sm md:text-md"
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="https://github.com/sciemesfin"
                      className="text-blue-600 hover:text-blue-900 dark:hover:text-white text-sm md:text-md"
                    >
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Start today, it is 100% free
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Try Flowbite Platform for 30 days. No credit card required.
              </p>
              <Link
                href="/chat"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Try EtyopChat 100% free
              </Link>
            </div>
          </div>
        </section>
        <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
          <div className="mx-auto max-w-screen-xl">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022{" "}
                <Link
                  href="https://bizenforce.vercel.app"
                  className="hover:underline"
                >
                  Developed by: Mesfin Tsegaye
                </Link>
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link
                  href="https://www.linkedin.com/in/mesfin-tsegaye"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  Linkedin
                </Link>
                <Link
                  href="https://github.com/sciemesfin"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
