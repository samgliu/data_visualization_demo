import { csv } from 'd3';

export const getData = async (csvUrl) => {
  const data = await csv(csvUrl);

  // Have a look at the attributes available in the console!
  console.log(data[0]);
  return data;
};
