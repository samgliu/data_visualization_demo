export const randomColorGenerator = (num: number = 1): string[] => {
  const arr: string[] = [];
  for (var i = 0; i < num; i++)
    arr.push(
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substring(1, 7)
    );
  console.log(arr);
  return arr;
};
