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
     

     <section>
     <>
  {/* component */}
  <div className="w-full">
    <div className="flex bg-white h-screen">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <span className="text-2xl font-semibold text-gray-800 md:text-4xl">
            ⏰ Coming<span className="ml-2 text-blue-600">Soon</span> ⏰
          </span>
          <h1 className="py-5 text-5xl font-semibold text-gray-800 md:text-6xl">
            Font<span className="ml-2 text-blue-600">Generator</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500 md:text-lg">
            <a href="https://fontgenerator.org/">Font generator</a> is the best
            free online website to generate cool and stylish{" "}
            <strong>fancy fonts</strong> without any third party app. The
            website is under construction meanwhile you can follow on below
            social network.
          </p>
          <div className="flex space-x-3 justify-center lg:justify-start mt-6">
            <a
              href="https://www.facebook.com/FontGen/"
              className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://twitter.com/FontGen"
              className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
              <span>Reddit</span>
            </a>
            <a
              href="#"
              className="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Pinterest icon</title>
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <div
          className="h-full object-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80)"
          }}
        >
          <div className="h-full bg-blue-500 opacity-50" />
        </div>
      </div>
    </div>
  </div>
</>

     </section>

      <>
      <div className="px-12 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
      <span>Start</span>{" "}
      <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        building a buzz
      </span>{" "}
      <span>around your product ?</span>
    </h1>
    <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
      Start gaining the traction you have always wanted with our next-level
      templates and designs. Crafted to help you tell your story.
    </p>
    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
      <a
        href="#_"
        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
      >
        Get Started
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#_"
        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </a>
    </div>
  </div>
</div>


  {/* component */}
  <div className="w-full z-50 sticky  px-6 bg-blue-600">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
              Lorem Ipsum Is Cool.
            </h2>
            <p className="text-white text-base md:text-lg">
              {" "}
              Lorem Ipsum is so cool and awesome to act and so cool to think.
              And very awesome to eat and talk.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <link href="/comingsoon" />
            <a className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black">
              &nbsp;&nbsp;
              <img
                width={25}
                alt="google auth logo"
                height="{20}"
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg"
              />
              &nbsp;&nbsp; Get Started
            </a>
          </div>
        </div>
        <img
          alt="logo"
          width={450}
          height={450}
          src="https://images.unsplash.com/photo-1542304074-9c8ce93b52fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <img
          alt="logo"
          width={450}
          height={450}
          src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
              Step 2 : Awesome Is Lorem Ipsum
            </h2>
            <p className="text-white text-base md:text-lg">
              Lorem Ipsum is so cool and awesome to act and so cool to think.
              And very awesome to eat and talk.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <link href="/comingsoon" />
            <a className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black">
              &nbsp;&nbsp;
              <img
                alt="logo"
                width={25}
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg"
              />
              &nbsp;&nbsp; Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
              Step 3 : Cool and awesome is lorem ipsum
            </h2>
            <p className="text-white text-base md:text-lg">
              Lorem Ipsum is so cool and awesome to act and so cool to think.
              And very awesome to eat and talk.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <link href="/comingsoon" />
            <a className="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black">
              &nbsp;&nbsp;
              <img
                alt="logo"
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg"
              />
              &nbsp;&nbsp; Get Started
            </a>
          </div>
        </div>
        <img
          alt="logo"
          width={450}
          height={450}
          src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </div>
    <div className="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            width={50}
            height={50}
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="mobile app"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-black lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl text-white font-extrabold leading-none sm:text-4xl">
            Need Some Help!
          </h5>
          <p className="mb-8 text-blue-400 font-black"></p>
          <div className="flex items-left">
            <link href="/comingsoon" />
            <a className="flex hover:border-2 hover:shadow-xl items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black">
              &nbsp;&nbsp;
              <img
                width={25}
                alt="gmail logo"
                src="https://cdn.icon-icons.com/icons2/2170/PNG/512/google_logo_brand_social_icon_133256.png"
              />
              &nbsp;&nbsp; Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  );
}
