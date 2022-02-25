import React from "react";
import { Box, Text } from "../../theme/components";
import { ValidationStatus } from "../types";

const SIZE = 40;

interface Props {
  letter: string;
  index: number;
  validationStatus: ValidationStatus;
}
export const LetterBox = ({ letter, index, validationStatus }: Props) => {
  return (
    <Box
      width={SIZE}
      height={SIZE}
      padding="s"
      backgroundColor={
        validationStatus === "o" ? "background.correct" : "background.unused"
      }
      borderWidth={1}
      borderColor="border"
    >
      <Box
        alignItems="center"
        justifyContent="center"
        borderRadius={SIZE / 2}
        flex={1}
        backgroundColor={
          validationStatus === "-" ? "background.misplaced" : undefined
        }
      >
        <Text
          color="letter"
          fontFamily="Mytupi"
          textTransform="uppercase"
          fontSize={16}
        >
          {letter}
        </Text>
      </Box>
    </Box>
  );
};
