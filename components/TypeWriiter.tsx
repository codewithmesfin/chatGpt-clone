import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriiter(props: any) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(props.text)
          .start();
      }}
      options={{delay:30}}
    />
  );
}
