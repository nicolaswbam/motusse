export const createLetterMap = (word: string): Map<string, number> => {
  const map = new Map<string, number>();
  for (const letter of word.split('')) {
    map.set(letter, (map.get(letter) ?? 0) + 1);
  }

  console.log(map);

  return map;
};
