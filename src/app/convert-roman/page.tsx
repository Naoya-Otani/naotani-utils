"use client";

import { useState } from "react";
import { AlertCircle, CircleCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { processInput } from "@/lib/convertRomanInt";

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
          <AlertDescription>{status.result}</AlertDescription>
        </Alert>
      )}
      <div className="">
        <p>注意</p>
        <p>
          アラビア数字は1以上9999以下の整数を入力してください。
          ローマ数字の出入力は大文字のアルファベットで行います。
        </p>
      </div>
    </div>
  );
};

export default ConvertRomanInt;
