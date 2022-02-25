import React from "react";
import { Box } from "../../theme/components";
import { LetterBox } from "./LetterBox";

interface Props {
  word: string;
}

export const WordLine = ({ word }: Props) => {
  return (
    <Box flexDirection="row" borderColor="border">
      {word.split("").map((letter, index) => (
        <LetterBox letter={letter} key={`letter_${index}`} />
      ))}
    </Box>
  );
};
