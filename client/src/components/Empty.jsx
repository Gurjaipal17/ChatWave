import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh]   items-center justify-center">
      <Image src="/ChatWaveLogo.gif" alt="ChatWaveLogo-gif" height={300} width={300} />
    </div>
  );
}

export default Empty;
