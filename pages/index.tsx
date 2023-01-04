import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [item, setItem] = useState({
    loading: false,
    data: [],
    error: "",
    choices: [],
    title:""
  });
  const [input, setInput] = useState("");

  async function handleSend() {
    setItem({...item,loading:true,title:input})
    setInput("")
    var data = JSON.stringify({
      model: "text-davinci-003",
      // prompt: "Can you tell me about Tesfa Coffee?",
      prompt: input,
      temperature: 0.9,
      max_tokens: 150,
    });

    var config = {
      method: "post",
      url: "https://api.openai.com/v1/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
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
        console.log(response.data);
      })
      .catch(function (error) {
        setItem({ ...item, loading: false, error: "Error" });
        console.log(error);
      });
  }

  return (
    <div className="p-[200px]">
      {/* Input field and send button */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSend} className="bg-blue-600 p-2 text-white">
        Send
      </button>
      {item.loading ? (
        <div>Loading ...</div>
      ) : (
        item.choices.map((x: any, i: number) => <div key={i}>
          {x.text}
        </div>)
      )}
    </div>
  );
}

export default Chatbot;
