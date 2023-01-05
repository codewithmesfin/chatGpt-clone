import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import MessageBody from "./MessageBody";
import TextBox from "./TextBox";

export default function Chat() {
  const messageEl = useRef<any>(null);
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener(
        "DOMNodeInserted",
        (event: { currentTarget: any }) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  }, []);

  const [item, setItem] = useState({
    loading: false,
    data: [],
    error: "",
    choices: [],
  });
  const [input, setInput] = useState("");
  const [groups, setGroup] = useState<any>([]);
  const [history, setHistry] = useState({ loading: true, data: [] });
  async function fetchData() {
    setItem({ ...item, loading: true });

    var data = JSON.stringify({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0.9,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });

    var config = {
      method: "post",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setItem({
          ...item,
          loading: false,
          data: response.data,
          choices: response.data.choices,
          error: "",
        });
        const chatData = [
          ...groups,
          ...[
            {
              title: input,
              res: response.data.choices[0].text,
              is_code: response.data.choices[0].is_code,
            },
          ],
        ];
        setGroup(chatData);
        localStorage.setItem("histories", JSON.stringify(chatData));
        setInput("");
        console.log(response.data);
      })
      .catch(function (error) {
        setItem({ ...item, loading: false, error: "Error" });
        console.log(error);
      });
  }

  const links = [
    {
      title: "What is OpenAI?",
      href: "https://openai.com/",
    },
    {
      title: "Try ChatGPT",
      href: "https://chat.openai.com/chat",
    },
    {
      title: "OpenAI Research",
      href: "https://openai.com/research",
    },
  ];

  useEffect(() => {
    readHistories();
  }, [item.loading]);

  const readHistories = () => {
    const data = localStorage.getItem("histories");
    setHistry({
      ...history,
      loading: false,
      data: data ? JSON.parse(data) : [],
    });
  };

  return (
    <div>
      {/* Large screen */}
      <div className="hidden sm:block">
        <div
          className="bg-no-repeat bg-cover bg-center h-screen relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
          <div className=" md:w-[70%] mx-auto left-0 right-0 md:p-10 h-screen">
            <div className="w-full h-full relative z-1 bg-gray-100 rounded shadow-sm overflow-hidden">
              <div className="md:flex justify-between">
                <section className="md:w-[30%] h-[100vh] border-r border-gray-300 hidden md:block">
                  <div className="w-full">
                    <section className="p-5">
                      <p className="text-center font-semibold">
                        A simple AI powered Chatbot created from the{" "}
                        <Link
                          href={"https://openai.com"}
                          className="text-blue-600 pr-1"
                        >
                          OpenAI
                        </Link>
                        clone.
                      </p>

                    </section>
                    {history.data.length <= 0 ? (
                      <section className="h-[65vh] flex p-5 items-center justify-center">
                        <div>
                          <h1 className="text-green-600">No chat history</h1>
                        </div>
                      </section>
                    ) : (
                      <section className="h-[100vh] p-5">
                        {history.data.map((x: any, i) => (
                          <div key={i} className="py-1">
                            <button
                              className="text-sm text-left"
                              onClick={() => {
                                setGroup([x]);
                              }}
                            >
                              {x.title}
                            </button>
                          </div>
                        ))}
                      </section>
                    )}
                    <section className="sticky bg-white bottom-0 w-[100%] right-0 left-0  w-full">
                     <div className="p-5">
                     <div className="pb-3">
                        <button
                          className="font-semibold text-sm text-red-600 pb-3"
                          onClick={() => {
                            localStorage.clear();
                            setGroup([]);
                            setHistry({ ...history, data: [] });
                          }}
                        >
                          Clear Conversations
                        </button>{" "}
                        {links.map((x, i) => (
                          <div key={i} className="py-1">
                            <Link
                              href={x.href}
                              className="font-semibold text-sm text-blue-600"
                            >
                              {x.title}{" "}
                            </Link>
                          </div>
                        ))}
                      </div>

                      <button className="text-red-600"
                       onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
                      >Log out</button>
                     </div>
                      <div className="space-y-1 p-5 mt-3 py-3 border-y">
                        <p className="block text-sm rounded-md font-medium">
                          Developed by
                          <Link
                            className="text-blue-600 px-2"
                            href="https://www.linkedin.com/in/mesfin-tsegaye"
                          >
                            Mesfin Tsegaye
                          </Link>
                        </p>
                        <p className="block text-sm rounded-md font-medium">
                          Visit Website
                          <Link
                            className="text-blue-600 pl-2"
                            href="https://bizenforce.vercel.app"
                          >
                            Bizenforce
                          </Link>
                        </p>
                      </div>
                    </section>
                  </div>
                </section>
                <section className="w-full bg-white md:w-[70%]">
                  <div>
                    <section className="border-b py-5 px-10 bg-blue-100">
                      <h1 className="text-xl font-extrabold">
                        Welcome <span className="text-blue-600">BizeChat</span>
                      </h1>
                    </section>
                    <section
                      className="overflow-y-scroll h-[100vh] sm:h-[100vh]"
                      ref={messageEl}
                    >
                      <MessageBody groups={groups} loading={item.loading} />
                    </section>
                    <section className="absolute border-t top-[80vh] md:top-[83vh] bottom-0 md:bottom-0 w-[100%] md:w-[70%] mx-auto right-[0%] left-0 md:left-[30%]">
                      <div className="flex items-end bg-white px-4 pt-5 pb-4">
                        <textarea
                          rows={2}
                          placeholder="Type anything here ..."
                          className="max-h-[200px] text-xs h-[30px] overflow-x-hidden m-0 w-full resize-none border-0 bg-transparent p-0 md:pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent border-none focus:ring-0 focus:outline-none"
                          onChange={(e) => setInput(e.target.value)}
                          value={input}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && input !== "") fetchData();
                          }}
                        />
                        <button
                          className="p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
                          onClick={fetchData}
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
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Large screen */}

      {/* small screen    */}
      <div className="relative sm:hidden w-full h-full">
        <div className="w-full md:w-[70%] md:left-[15%] md:right-[15%] h-full  fixed mx-auto">
          <div className="shadow w-full h-full">
            <div className="flex flex-col justify-between  h-full">
              <section className="border-b bg-green-100">
                <Menu
                  history={history.data}
                  onHistoryClick={(e: any) => setGroup([e])}
                />
              </section>

              <section
                className="bg-blue-100 h-sceen overflow-y-scroll"
                ref={messageEl}
              >
                <MessageBody groups={groups} loading={item.loading} />
              </section>
              <section className="bottom-0 w-full">
                <div>
                  <TextBox
                    onChage={(e) => setInput(e)}
                    onEnter={fetchData}
                    onClick={fetchData}
                    input={input}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* small screen  */}
    </div>
  );
}
