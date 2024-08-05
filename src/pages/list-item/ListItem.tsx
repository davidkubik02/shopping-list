import { useEffect, useState } from "react";
import styles from "./listItem.module.css";
import Item from "./item/Item";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addDropDownItem,
  getDropDownItems,
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

  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const [dropDownItems, setDropDownItems] = useState<string[]>([]);

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
    if (!itemName) {
      window.alert(`Položka nemůže být prázdná!`);
      return;
    }
    if (itemExists(itemName)) {
      window.alert(`Položka "${itemName}" již existuje!`);
    } else {
      const list: List = {
        name: id,
        items: [...items, itemName],
      };
      updateListItems(list);
      setItems(list.items);
      addDropDownItem(itemName);
      setItemName("");
    }
  };

  const blurHandle = () => {
    setTimeout(() => {
      setDropDownOpen(false);
    }, 150);
  };
  const focusHandle = () => {
    setTimeout(() => {
      setDropDownOpen(true);
    }, 150);
  };
  useEffect(() => {
    setDropDownItems(getDropDownItems(itemName));
  }, [dropDownOpen]);
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
    setDropDownItems(getDropDownItems(e.target.value));
  };

  const dropDownClickHandle = (name: string) => {
    setItemName(name);
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
              onFocus={focusHandle}
              onBlur={blurHandle}
              onChange={changeHandle}
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
            {dropDownOpen && dropDownItems.length ? (
              <div className={styles.dropDown}>
                {dropDownItems.map((dropDownItem) => {
                  return (
                    <div
                      onClick={() => dropDownClickHandle(dropDownItem)}
                      key={dropDownItem}
                      className={styles.dropDownRow}
                    >
                      {dropDownItem}
                    </div>
                  );
                })}
              </div>
            ) : undefined}
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
