export const convertPathname = (path: string) => {
  let cutString = path.split(" ");
  const lower = cutString.map((element) => {
    return element.toLowerCase();
  });
  let pathNew = lower.join("-");

  return pathNew;
};
export const comparePath = async (path: string) => {
  const cutString = path.split("-");
  const upper = cutString.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  const pathNew = upper.join(" ");
  return pathNew;
};

export const compareToLowerSearchProduct = async (search: string) => {
  const cutString = search.split(" ");
  const upper = cutString.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  const pathNew = upper.join(" ");
  return pathNew;
};
