import React from "react";
import Yangi from "./components/yangi";
import Audio from "./components/audio";

export const Hero = () => {
  return (
    <>
      <div className="container">
        <section>
          <h2 className="font-semibold text-[32px] leading-[125%] mb-[30px]">
            Янги қўшилганлар
          </h2>
          <Yangi />
          <h2 className="font-semibold text-[32px] leading-[125%] mb-[30px]">
            Аудио китоблар
          </h2>
          <Audio />
        </section>
      </div>
    </>
  );
};
