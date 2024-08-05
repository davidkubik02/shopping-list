import { useEffect, useState } from "react";
import styles from "./listItem.module.css";
import Item from "./item/Item";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getList,
  List,
  listExists,
  updateListItems,
} from "../../localStorage/localStorage";

function ListItem() {
  const [items, setItems] = useState<string[]>([]);
  const [itemName, setItemName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const [isShoppingListExists, setIsShoppingListExists] =
    useState<boolean>(false);

  const [isDataUpdated, setIsDataUpdated] = useState<boolean>(false);

  const { id } = useParams();
  useEffect(() => {
    if (!isDataUpdated) {
      if (!id) return;
      if (listExists(id)) {
        setIsShoppingListExists(true);
        const list = getList(id);
        setItems(list.items);
        setIsDataUpdated(true);
      }
    }
  }, [id, isDataUpdated]);

  const itemExists = (name: string): boolean => {
    return items.includes(name);
  };

  const addHandle = (): void => {
    if (!id) return;
    if (itemName) {
      if (itemExists(itemName)) {
        window.alert(`Položka "${itemName}" již existuje!`);
      } else {
        const list: List = {
          name: id,
          items: [...items, itemName],
        };
        updateListItems(list);
        setItems(list.items);
        setItemName("");
      }
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div className={`page-title ${styles.listItemTitle}`}>
        Položky seznamu
      </div>
      {isShoppingListExists ? (
        <div>
          <div className={styles.listItemAddWrapper}>
            <input
              onChange={(e) => setItemName(e.target.value)}
              value={itemName}
              type="text"
              className={`input ${styles.listItemInput}`}
              ref={inputRef}
            />
            <button
              className={`button ${styles.addButton}`}
              onClick={addHandle}
            >
              Přidat
            </button>
          </div>
          <ul>
            {items.map((name, index) => {
              return (
                <Item
                  listName={id}
                  info={{ name, index }}
                  key={name}
                  itemExists={itemExists}
                  updateData={() => setIsDataUpdated(false)}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          {"Seznam nebyl nalezen, "}
          <Link to={"/shoping-lists"}>Zpět</Link>
        </div>
      )}
    </div>
  );
}

export default ListItem;
