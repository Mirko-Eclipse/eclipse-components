import "./List.css";

export const createList = (args) => {
  const list = document.createElement("ul");
  list.className = ["eclipse-ul-cunard eclipse-ul-" + args.mode + "-cunard"];
  return list;
};

export const createListItem = (args) => {
  const li = document.createElement("li");
  li.className = ["eclipse-li-cunard eclipse-li-" + args.mode + "-cunard"];
  li.innerText = args.item;
  return li;
};
