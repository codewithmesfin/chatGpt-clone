import React from "react";

interface PROPS {
  onChage: (e: string) => void;
  onEnter: any;
  input: string;
  onClick: any;
loading:boolean
}

export default function SMTextBox({ onChage, onEnter, input, onClick,loading }: PROPS) {
  return (
    <div className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
      <div className="relative flex h-full flex-1 md:flex-col">
        <div className="ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center">
          <button className="btn py-1.5 px-5 rounded flex justify-center items-center gap-2 btn-neutral border-0 md:border">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="1 4 1 10 7 10" />
              <polyline points="23 20 23 14 17 14" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
            Regenerate response
          </button>
        </div>
        <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
          <textarea
          disabled={loading}
            tabIndex={0}
            data-id="e4f91a0c-8d82-4107-99df-a6726ee63272"
            rows={1}
            placeholder=""
            className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 border-none focus:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 dark:bg-transparent"
            style={{ maxHeight: 200, height: 24, overflowY: "hidden" }}
            defaultValue={""}
            onChange={(e) => onChage(e.target.value)}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input !== "") onEnter();
            }}
          />
          <button
            onClick={onClick}
            disabled={input === ""}
            className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
          >
           { 
              loading?
              <span className="three-dot text-xl"></span>
              : <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              className="h-4 w-4 rotate-90"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>}
          </button>
        </div>
      </div>
    </div>
  );
}
