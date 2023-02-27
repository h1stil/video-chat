const createRandomColor = (user: string, saturation = 50, lightness = 35) => {
  let hash = 0;
  for (let i = 0; i < user.length; i++) {
    hash = user.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return `linear-gradient(hsl(${
    hash % 360
  }, ${saturation}%, ${lightness}%), hsl(250deg, 20%, 50%))`;
};

export default createRandomColor;
