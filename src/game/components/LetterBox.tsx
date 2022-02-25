import React from "react";
import { Box, Text } from "../../theme/components";

const SIZE = 40;

interface Props {
  letter: string;
}
export const LetterBox = ({ letter }: Props) => {
  return (
    <Box
      width={SIZE}
      height={SIZE}
      backgroundColor="background.unused"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor="border"
    >
      <Text color="letter" fontFamily="Mytupi">
        {letter}
      </Text>
    </Box>
  );
};
