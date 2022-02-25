import React from "react";
import { Box } from "../../theme/components";
import { LetterBox } from "./LetterBox";

interface Props {
  word: string;
  wordOfTheDay: string;
}

export const WordLine = ({ word, wordOfTheDay }: Props) => {
  return (
    <Box flexDirection="row" borderColor="border">
      {word.split("").map((letter, index) => (
        <LetterBox
          letter={letter}
          index={index}
          key={`letter_${index}`}
          wordOfTheDay={wordOfTheDay}
        />
      ))}
    </Box>
  );
};
