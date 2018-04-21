export const chunkArray = (array, size) => {
  let index;
  const newArray = [];
  for (index = 0; index < array.length; index += size) {
    const chunk = array.slice(index, index + size);
    newArray.push(chunk);
  }
  return newArray;
};
