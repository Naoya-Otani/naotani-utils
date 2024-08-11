"use client";

import { useState } from "react";
import CopyBtn from "@/components/origin/elements/CopyBtn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { processInput } from "@/lib/convertRomanInt";
import { AlertCircle, CircleCheck } from "lucide-react";

const ConvertRomanInt = () => {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const status = processInput(input);
  return (
    <div className="mx-auto flex max-w-[640px] flex-col gap-4 p-8 lg:p-16">
      <Label htmlFor="convert">アラビア数字・ローマ数字を入力</Label>
      <Input type="text" id="convert" value={input} onChange={handleChange} />
      {status.status === "failure" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>エラー</AlertTitle>
          <AlertDescription>{status.errorMessage}</AlertDescription>
        </Alert>
      )}
      {status.status === "success" && (
        <Alert variant="success">
          <CircleCheck className="h-4 w-4" />
          <AlertTitle>結果</AlertTitle>
          <AlertDescription className="flex items-end justify-between">
            <p className="text-xl">{status.result}</p>
            <CopyBtn text={status.result.toString()} />
          </AlertDescription>
        </Alert>
      )}
      <div className="">
        <h3 className="mb-2 font-bold">注意</h3>
        <div className="flex flex-col gap-y-1">
          <p>アラビア数字は1以上9999以下の整数を入力してください。</p>
          <p>ローマ数字の出入力は大文字のアルファベットで行います。</p>
        </div>
      </div>
    </div>
  );
};

export default ConvertRomanInt;
