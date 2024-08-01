import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};
const Button = ({ children }: PropsType) => {
  return (
    <>
      <button
        style={{
          padding: "10px 20px ",
          fontSize: 20,
          borderRadius: 5,
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
      >
        {children}
      </button>
    </>
  );
};

export { Button };
