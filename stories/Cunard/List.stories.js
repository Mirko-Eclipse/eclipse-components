import { createList, createListItem } from "./List"

export default {
    title: 'Cunard/List'
}

export const Bullet = (args) => {
    const list = createList(args);
    list.appendChild(createListItem({mode:'primary'}));
    list.appendChild(createListItem({mode:'primary'}));
    list.appendChild(createListItem({mode:'primary'}));
    return list;
}