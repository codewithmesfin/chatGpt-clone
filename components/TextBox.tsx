import React from "react";

interface PROPS {
  onChage: (e: string) => void;
  onEnter: any;
  input: string;
  onClick: any;
}

export default function TextBox({ onChage, onEnter, input, onClick }: PROPS) {
  return (
    <div className="flex items-end bg-white w-full p-5 border-t fixed bottom-0">
      <textarea
        className="w-full focus-visible:ring-0 dark:bg-transparent border-none focus:ring-0 focus:outline-none"
        rows={2}
        placeholder="Type anything here ..."
        onChange={(e) => onChage(e.target.value)}
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input !== "") onEnter();
        }}
      />
      <button
        className="p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
        onClick={onClick}
        disabled={input === ""}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          className="h-4 w-4 rotate-90"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </button>
    </div>
  );
}
