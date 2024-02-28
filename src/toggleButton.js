export default (toHidden, toDisplay) => {
  toHidden.classList.add("hidden");
  toDisplay.classList.remove("hidden");
  toDisplay.focus();
};
