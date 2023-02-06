export const scrollMessages = () => {
  const chat = document.querySelector(".dialog__chat") as HTMLDivElement;
  chat.scrollTop = chat.scrollHeight;
};
