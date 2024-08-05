import { useRef, useState } from "react";
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
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

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
      setIsEditing(false);
      return;
    }

    if (itemExists(itemName)) {
      window.alert(`Položka "${itemName}" již existuje!`);
      return;
    }
    updateItemInList(listName, info.name, itemName);
    setIsEditing(false);
    updateData(false);
  };
  const removeItemHandle = (itemName: string): void => {
    if (!listName) return;
    deleteListItem(listName, itemName);
    updateData(false);
  };

  const cancelHandle = () => {
    setIsEditing(false);
    setitemName(info.name);
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.itemName}
        onChange={(e) => {
          setitemName(e.target.value);
        }}
        ref={inputRef}
        value={itemName}
        readOnly={!isEditing}
      />
      <div className={styles.buttonsWrapper}>
        <div className={styles.editButtonsWrapper}>
          {isEditing ? (
            <>
              <button
                className={`button ${styles.saveButton}`}
                onClick={saveHandle}
              >
                Uložit
              </button>
              <button
                className={`button ${styles.cancelButton}`}
                onClick={cancelHandle}
              >
                Zrušit
              </button>
            </>
          ) : (
            <button
              className={`button`}
              onClick={() => {
                setIsEditing(true);
                inputRef.current?.focus();
              }}
            >
              Upravit
            </button>
          )}
        </div>

        <button
          className={"button delete-button"}
          onClick={() => removeItemHandle(info.name)}
        >
          Smazat
        </button>
      </div>
    </li>
  );
}

export default Item;
