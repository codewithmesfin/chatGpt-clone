import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Chat() {
  const messageEl = useRef<any>(null);
  //   useEffect(() => {
  //     if (messageEl) {
  //       messageEl.current.addEventListener(
  //         "DOMNodeInserted",
  //         (event: { currentTarget: any }) => {
  //           const { currentTarget: target } = event;
  //           target.scroll({ top: target.scrollHeight, behavior: "smooth" });
  //         }
  //       );
  //     }
  //   }, []);

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
    <div className="relative w-full h-full">
      <div className="w-full md:w-[70%] md:left-[15%] md:right-[15%] h-full  fixed mx-auto">
        <div className="shadow w-full h-full">
          <div className="md:flex w-full h-full">
            <div className="md:w-[30%]">Left</div>
            <div className="md:w-[70%] h-full">
              <div className="flex flex-col justify-between bg-red-200  h-full">
                <section className="p-10 bg-blue-100 h-[2000px] overflow-y-scroll ">
                  Contents ..
                 <div>
                 {[
                    1,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    33,
                    3,
                    3,
                    3,
                    3,
                    3,
                    ,
                    33,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                  ].map((x) => (
                    <div key={x}>
                      <p className="p-10">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  ))}
                 </div>
                </section>
                <section className="bottom-0 w-full">
                  <div className="p-5 bg-green-100">Footer</div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
