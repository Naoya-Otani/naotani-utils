"use client";

import { Button } from "@/components/ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

type CopyBtnProps = {
  text: string;
};

const CopyBtn = ({ text }: CopyBtnProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className="border-success/50 p-2"
    >
      {isCopied ? <ClipboardCheck /> : <Clipboard />}
    </Button>
  );
};

export default CopyBtn;
