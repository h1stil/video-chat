export const recordMessage = () => {
  const startRecord = document.querySelector(
    ".panel__record_start"
  ) as HTMLSpanElement;
  startRecord.classList.toggle("active");
  const stopRecord = document.querySelector(
    ".panel__record_stop"
  ) as HTMLSpanElement;
  stopRecord.classList.toggle("active");
};
