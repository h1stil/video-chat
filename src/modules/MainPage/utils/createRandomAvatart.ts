import tinycolor from "tinycolor2";

const createRandomColor = (user: string) => {
  const [r, g, b] = user
    .substring(0, 3)
    .split("")
    .map((char) => (char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0)));
  const color = tinycolor({ r, g, b }).toHexString();
  return color;
};

export default createRandomColor;
