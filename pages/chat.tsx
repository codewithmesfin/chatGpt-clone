import axios from "axios";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Chat from "../components/chat";
import Signin from "../components/signin";

export default function EtyopChat() {
  useEffect(() => checkUser(), []);
  const [user, setUser] = useState({});

  const checkUser = () => {
    const usr = localStorage.getItem("user");
    if (usr) setUser({ ...user, ...JSON.parse(usr) });
  };
  // return user &&user.token ? <Chat /> : <Signin />
  return (
    <div>
      <Head>
        <title>EtyopChat</title>
        <meta
          name="description"
          content="We are dedicated to creating the highest quality software products with exceptional brands of any size. Our goal is to consistently provide our customers with extraordinary services, offering fast, reliable turn arounds with low minimums and high volume capacity"
          key="desc"
        />
      </Head>
      <Chat />
    </div>
  );
}
