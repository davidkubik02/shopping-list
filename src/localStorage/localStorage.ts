export type List = {
  name: string;
  items: string[];
};

export const getAllLists = (): string[] => {
  const keys = localStorage.getItem("keys");
  return keys ? JSON.parse(keys) : [];
};
export const getList = (listName: string): List => {
  const list = localStorage.getItem(listName);
  return list ? JSON.parse(list) : {};
};

export const listExists = (listName: string) => {
  const key = localStorage.getItem(listName);
  return key ? true : false;
};

export const saveList = (list: List): void => {
  localStorage.setItem(list.name, JSON.stringify(list));
  const storedKeys = localStorage.getItem("keys");
  const keys = storedKeys ? JSON.parse(storedKeys) : [];
  localStorage.setItem("keys", JSON.stringify([...keys, list.name]));
};

export const updateListName = (listName: string, newName: string): void => {
  const list = getList(listName);
  list.name = newName;

  localStorage.setItem(list.name, JSON.stringify(list));
  deleteList(listName);
  const storedKeys = localStorage.getItem("keys");
  const keys = storedKeys ? JSON.parse(storedKeys) : [];
  localStorage.setItem("keys", JSON.stringify([...keys, newName]));
};

export const deleteList = (listName: string): void => {
  localStorage.removeItem(listName);
  const storedKeys = localStorage.getItem("keys");
  const keys = storedKeys
    ? JSON.parse(storedKeys).filter((key: string) => key !== listName)
    : [];
  localStorage.setItem("keys", JSON.stringify(keys));
};

export const updateListItems = (list: List): void => {
  localStorage.setItem(list.name, JSON.stringify(list));
};
export const deleteListItem = (listName: string, deletedItem: string): void => {
  const list = getList(listName);
  list.items = list.items.filter((item) => item !== deletedItem);
  localStorage.setItem(list.name, JSON.stringify(list));
};
export const updateItemInList = (
  listName: string,
  oldName: string,
  newName: string
): void => {
  const list = getList(listName);
  list.items = list.items.map((item) => (item === oldName ? newName : item));
  localStorage.setItem(list.name, JSON.stringify(list));
};
