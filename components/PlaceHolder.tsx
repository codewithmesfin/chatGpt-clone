import React from "react";

interface PROPS{
    onPlaceholderClick:(e: string)=>void
}
export default function PlaceHolder({onPlaceholderClick}:PROPS) {
  const items = [
    {
      title: "Examples",
      children: [
        `"Explain quantum computing in simple terms" →`,
        `"Got any creative ideas for a 10 year old’s birthday?" →`,
        `"How do I make an HTTP request in Javascript?" →`,
      ],
    },
    {
      title: "Capabilities",
      children: [
        `Remembers what user said earlier in the conversation`,
        `Allows user to provide follow-up corrections`,
        `Trained to decline inappropriate requests`,
      ],
    },
    {
      title: "Limitations",
      children: [
        `May occasionally generate incorrect information`,
        `May occasionally produce harmful instructions or biased content`,
        `Limited knowledge of world and events after 2021`,
      ],
    },
  ];
  return (
    <div className="md:w-[80%]">
      <h1 className="text-4xl text-center text-blue-600 font-extrabold md:6xl">
        BizeChat
      </h1>
      <div className="py-10">
        <div className="md:flex">
          {items.map((x, i) => (
            <div key={i}>
              <div className="p-5">
                <h1 className="text-center text-xl">{x.title} </h1>
                <div className="py-3">
                  {x.children.map((item) => (
                    <div  onClick={() => onPlaceholderClick(item)}
                     key={item} className="shadow-sm  hover:bg-[#DDDDDD] cursor-pointer bg-gray-100 rounded-md py-3 px-5 my-8">
                        <p className="text-sm text-center">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
