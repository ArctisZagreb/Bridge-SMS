export const convertDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-gb", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const sortArrayAlph = (
  array: (string | string[])[][],
  sortType: string,
  row: number
): any => {
  const sortedData = array.sort((a: any, b: any): number => {
    const nameA =
      typeof a[row] === "string"
        ? a[row].toUpperCase()
        : a[row][0].toUpperCase(); // ignore upper and lowercase
    const nameB =
      typeof b[row] === "string"
        ? b[row].toUpperCase()
        : b[row][0].toUpperCase(); // ignore upper and lowercase
    if (sortType === "top") {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    }
    if (sortType === "bottom") {
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
    }
    // names must be equal
    return 0;
  });
  return sortedData;
};
