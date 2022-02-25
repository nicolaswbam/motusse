import React from "react";
import { Box, Text } from "../../theme/components";

const SIZE = 40;

interface Props {
  letter: string;
  index: number;
  wordOfTheDay: string;
}
export const LetterBox = ({ letter, index, wordOfTheDay }: Props) => {
  return (
    <Box
      width={SIZE}
      height={SIZE}
      padding="s"
      backgroundColor={
        letter === wordOfTheDay[index]
          ? "background.correct"
          : "background.unused"
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
          letter !== wordOfTheDay[index] && wordOfTheDay.includes(letter)
            ? "background.misplaced"
            : undefined
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
