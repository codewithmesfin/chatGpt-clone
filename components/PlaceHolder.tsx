import React from "react";

interface PROPS {
  onPlaceholderClick: (e: string) => void;
}
export default function PlaceHolder({ onPlaceholderClick }: PROPS) {
  const items = [
    {
      title: "Examples",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={12} cy={12} r={5} />
          <line x1={12} y1={1} x2={12} y2={3} />
          <line x1={12} y1={21} x2={12} y2={23} />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1={1} y1={12} x2={3} y2={12} />
          <line x1={21} y1={12} x2={23} y2={12} />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
      children: [
        `"Explain quantum computing in simple terms" →`,
        `"Got any creative ideas for a 10 year old’s birthday?" →`,
        `"How do I make an HTTP request in Javascript?" →`,
      ],
    },
    {
      title: "Capabilities",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      children: [
        `Remembers what user said earlier in the conversation`,
        `Allows user to provide follow-up corrections`,
        `Trained to decline inappropriate requests`,
      ],
    },
    {
      title: "Limitations",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1={12} y1={9} x2={12} y2={13} />
          <line x1={12} y1={17} x2="12.01" y2={17} />
        </svg>
      ),
      children: [
        `May occasionally generate incorrect information`,
        `May occasionally produce harmful instructions or biased content`,
        `Limited knowledge of world and events after 2021`,
      ],
    },
  ];
  return (
    <div className="flex-1 overflow-hidden">
      <div className="react-scroll-to-bottom--css-pnthw-79elbk h-full dark:bg-gray-800">
        <div className="react-scroll-to-bottom--css-pnthw-1n7m0yu">
          <div className="flex flex-col items-center text-sm h-full dark:bg-gray-800">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
              <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16">
               EtyopChat
              </h1>
              <div className="md:flex items-start text-center gap-3.5">
                {items.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                  >
                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                      {item.icon}
                      {item.title}
                    </h2>
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.children.map((x: any) => (
                        <button
                          onClick={() => onPlaceholderClick(x)}
                          key={x}
                          className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                        >
                          {x}
                        </button>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-48 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
