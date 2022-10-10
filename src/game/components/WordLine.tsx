import React from "react";
import { Box } from "../../theme/components";
import { ValidationStatus } from "../types";
import { LetterBox } from "./LetterBox";

interface Props {
  word: string;
  maxLength: number;
  validation: string;
}

export function WordLine({ word, maxLength, validation }: Props) {
  return (
    <Box flexDirection="row" borderColor="border">
      {word
        .padEnd(maxLength, ".")
        .split("")
        .map((letter, index) => (
          <LetterBox
            letter={letter}
            index={index}
            key={`letter_${index}`}
            validationStatus={validation[index] as ValidationStatus}
          />
        ))}
    </Box>
  );
}
