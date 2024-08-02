import React, { useState } from "react";
import styles from "../listItem.module.css";
import {
  deleteListItem,
  updateItemInList,
} from "../../../localStorage/localStorage";
function Item({
  listName,
  info,
  itemExists,
  updateData,
}: {
  listName: string | undefined;
  info: { name: string; index: number };
  itemExists: (itemName: string) => boolean;
  updateData: (isDataUpdated: boolean) => void;
}) {
  const [itemName, setitemName] = useState<string>(info.name);
  const [isSaved, setIsSaved] = useState<boolean>(true);

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setitemName(e.target.value);
    setIsSaved(info.name === e.target.value ? true : false);
  };

  const saveHandle = () => {
    if (!listName) {
      window.alert("Nákupní seznam neexistuje");
      return;
    }
    if (!itemName) {
      window.alert("Jméno položky nemůže být prázdné");
      return;
    }
    if (itemExists(itemName)) {
      window.alert(`Položka "${itemName}" již existuje!`);
      return;
    }
    updateItemInList(listName, info.name, itemName);
    setIsSaved(true);
    updateData(false);
  };
  const removeItemHandle = (itemName: string): void => {
    if (!listName) return;
    deleteListItem(listName, itemName);
    updateData(false);
  };

  return (
    <li className={styles.item}>
      <button
        className={`button ${styles.cancelButton}`}
        onClick={() => removeItemHandle(info.name)}
      >
        x
      </button>
      {/* toDo upravit saveButton */}
      {!isSaved ? (
        <button
          className={`button ${styles.cancelButton}`}
          onClick={saveHandle}
        >
          O
        </button>
      ) : undefined}
      <input
        className={styles.itemName}
        onChange={changeHandle}
        value={itemName}
      />
    </li>
  );
}

export default Item;
