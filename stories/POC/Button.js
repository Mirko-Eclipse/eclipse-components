import "./Button.css";

export const createButton = (args) => {
  const btn = document.createElement("button");
  btn.innerText = args.label;
  btn.className = ["eclipse-btn-poc eclipse-btn-" + args.mode + '-poc'];
  return btn;
};
