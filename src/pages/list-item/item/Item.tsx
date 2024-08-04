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
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const saveHandle = () => {
    if (!listName) {
      window.alert("Nákupní seznam neexistuje");
      return;
    }
    if (!itemName) {
      window.alert("Jméno položky nemůže být prázdné");
      return;
    }
    if (itemName === info.name) {
      setIsChanging(false);
      return;
    }

    if (itemExists(itemName)) {
      window.alert(`Položka "${itemName}" již existuje!`);
      return;
    }
    updateItemInList(listName, info.name, itemName);
    setIsChanging(false);
    updateData(false);
  };
  const removeItemHandle = (itemName: string): void => {
    if (!listName) return;
    deleteListItem(listName, itemName);
    updateData(false);
  };

  const cancelHandle = () => {
    setIsChanging(false);
    setitemName(info.name);
  };

  return (
    <li className={styles.item}>
      <button
        className={`button ${styles.cancelButton}`}
        onClick={() => removeItemHandle(info.name)}
      >
        x
      </button>

      {isChanging ? (
        <div>
          <button className={`button`} onClick={saveHandle}>
            Uložit
          </button>
          <button className={`button`} onClick={cancelHandle}>
            Zrušit
          </button>
        </div>
      ) : (
        <button
          className={`button`}
          onClick={() => {
            setIsChanging(true);
          }}
        >
          Upravit
        </button>
      )}
      <input
        className={styles.itemName}
        onChange={(e) => {
          setitemName(e.target.value);
        }}
        value={itemName}
        readOnly={!isChanging}
      />
    </li>
  );
}

export default Item;
