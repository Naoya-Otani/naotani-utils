"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { processInput } from "@/lib/convertRomanInt";

const ConvertRomanInt = () => {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const status = processInput(input);
  return (
    <div className="flex flex-col gap-4 p-8 lg:p-16">
      <Input value={input} onChange={handleChange} />
      {status.status === "failure" && (
        <p className="text-red-500">エラー: {status.errorMessage}</p>
      )}
      {status.status === "success" && (
        <p className="text-green-500">結果: {status.result}</p>
      )}
    </div>
  );
};

export default ConvertRomanInt;
