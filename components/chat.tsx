/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SMConversation from "./sm/SM.Conversation";
import SMSideNav from "./sm/SM.SideNav";
import SMTextBox from "./sm/Sm.TextBox";
import XSConversation from "./xs/XS.Conversation";
import XSTextBox from "./xs/XS.TextBox";
import XSMenu from "./xs/XSMenu";

export default function Chat() {
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


  useEffect(() => {
    readHistories();
  }, [item.loading,groups]);

  const readHistories = () => {
    const data = localStorage.getItem("histories");

    setHistry({
      ...history,
      loading: false,
      data: data ? JSON.parse(data) : [],
    });
  };

  return (
    <div id="__next">
      <div className="overflow-hidden w-full h-full relative hidden sm:block">
        <div className="flex h-screen flex-1 flex-col md:pl-[260px]">
          <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
            <SMConversation groups={groups} loading={item.loading}  onPlaceholderClick={(e)=>{
              setInput(e)
              fetchData()
            }} />
            <section className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent  md:bg-vert-light-gradient bg-white dark:bg-gray-800 dark:md:bg-vert-dark-gradient">
              <SMTextBox
                onChage={(e) => setInput(e)}
                onEnter={fetchData}
                onClick={fetchData}
                input={input}
                loading={item.loading}
              />
              <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                <a
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  ChatGPT Dec 15 Version
                </a>
                . Free Research Preview. Our goal is to make AI systems more
                natural and safe to interact with. Your feedback will help us
                improve. API integrated by: <Link className="text-blue-600" href="https://www.linkedin.com/in/mesfin-tsegaye">Mesfin Tsegaye</Link>
              </div>
            </section>
          </main>
        </div>
        <section className="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
          <SMSideNav   history={history.data}
                  onHistoryClick={(e: any) => {setGroup([...groups,e])
                  }} />
        </section>
      </div>

      {/* small device  */}
      <div className="overflow-hidden sm:hidden w-full h-full relative">
        <div className="flex h-screen flex-1 flex-col md:pl-[260px]">
          <XSMenu
              history={history.data}
              onHistoryClick={(e: any) => {setGroup([...groups,e])
              }} 
          />
          <main className="relative pt-20 h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
            <XSConversation groups={groups} loading={item.loading}
             onPlaceholderClick={(e)=>{
              setInput(e)
              fetchData()
            }}
             />
            <section className="fixed bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
              <XSTextBox
                onChage={(e) => setInput(e)}
                onEnter={fetchData}
                onClick={fetchData}
                input={input}
                loading={item.loading}
              />
              <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                <a
                  href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  ChatGPT Dec 15 Version
                </a>
                . Free Research Preview. Our goal is to make AI systems more
                natural and safe to interact with. Your feedback will help us
                improve. <Link className="text-blue-600" href="https://www.linkedin.com/in/mesfin-tsegaye">Mesfin Tsegaye</Link>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* small device  */}
    </div>
  );
}
