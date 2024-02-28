export default (...buttons) => {
  buttons.forEach((btn) => {
    btn.onfocus = () => {
      btn.classList.add("fill-button");
    };
    btn.onblur = () => {
      btn.classList.remove("fill-button");
    };
  });
};
