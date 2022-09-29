import { createList, createListItem } from "./List";

export default {
  title: "Cunard/List",
};

export const Bullet = (args) => {
  const list = createList({mode:'bullet'});
  list.appendChild(
    createListItem({ mode: "primary", text: "something amazing" })
  );
  list.appendChild(
    createListItem({ mode: "primary", text: "discount for a group of persons" })
  );
  list.appendChild(createListItem({ mode: "primary", text: "one last item" }));
  return list;
};
