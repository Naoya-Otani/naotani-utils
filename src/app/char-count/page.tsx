"use client";

import { ChangeEvent, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CountResult from "@/components/origin/blocks/CountResult";

const CharCount = () => {
  const [text, setText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-8 lg:flex-row lg:p-16">
        <div className="flex-1">
          <p className="mb-4 text-xl font-semibold">Count</p>
          <Textarea
            className="mb-4"
            value={text}
            onChange={handleChange}
            placeholder="テキストを入力してください"
            rows={10}
          />
          <div className="flex justify-end">
            <Button variant={"destructive"} onClick={() => setText("")}>
              Clear
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <CountResult text={text} />
        </div>
      </div>
    </>
  );
};

export default CharCount;
