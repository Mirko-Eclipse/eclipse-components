import "./Button.css";

export const createButton = (args) => {
  const btn = document.createElement("button");
  btn.innerText = args.label;
  btn.className = ["eclipse-btn-cunard eclipse-btn-" + args.mode + '-cunard'];
  btn.addEventListener('click', () => {
    alert('button clicked')
  })
  return btn;
};
