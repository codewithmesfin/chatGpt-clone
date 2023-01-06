import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Chat from "../components/chat";
import Signin from "../components/signin";

export default function BizeChat() {
  useEffect(() => checkUser(), []);
  const [user, setUser] = useState({});

  const checkUser = () => {
    const usr = localStorage.getItem("user");
    if (usr) setUser({ ...user, ...JSON.parse(usr) });
  };
  // return user &&user.token ? <Chat /> : <Signin />
  return <Chat/>
}
