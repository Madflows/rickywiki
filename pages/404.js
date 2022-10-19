import React from "react";

export default function ErrorNotFound() {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-lg flex flex-col gap-4">
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "54%",
            position: "relative",
          }}
        >
          <img src="/rickmgif.gif" alt="rick and meg" />
        </div>
        <div className="flex flex-col items-center justify-between mt-[3rem]">
        <h2 className="text-3xl md:text-[7rem] font-black">404</h2>
        <p className="font-bold text-center text-lg mt-[2rem]">Yeah, there is nothing for you to see here -_-</p>
        </div>
      </div>
    </div>
  );
}
