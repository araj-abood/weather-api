import { useState } from "react";

export function useInput() {
  const [input, setInput] = useState("");

  const handleInputChange = (newText: string) => {
    setInput(newText);
  };

  const resetInput = () => {
    setInput("");
  };

  return { value: input, handleChange: handleInputChange, resetInput };
}
