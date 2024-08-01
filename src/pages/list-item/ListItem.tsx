import React, { useState } from "react";
import styles from "./listItem.module.css";
import Item from "./item/Item";
import { useRef } from "react";

function ListItem() {
  const [items, setItems] = useState<string[]>(["asdjki", "difshi"]);
  const [itemName, setItemName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addHandle = (): void => {
    if (itemName) {
      setItems((items) => [...items, itemName]);
      setItemName("");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const removeItemHandle = (index: number): void => {
    setItems((items) => items.filter((item, i) => i !== index));
  };
  const itemNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.value) {
      removeItemHandle(index);
      (document.activeElement as HTMLElement).blur();
      return;
    }
    setItems((items) =>
      items.map((item, i) => (i === index ? event.target.value : item))
    );
  };
  return (
    <div>
      <div className={`page-title ${styles.listItemTitle}`}>
        Položky seznamu
      </div>
      <div className={styles.listItemAddWrapper}>
        <input
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          type="text"
          className="input"
          ref={inputRef}
        />
        <button className={`button ${styles.addButton}`} onClick={addHandle}>
          Přidat
        </button>
      </div>
      <ul className={styles.itemsList}>
        {items.map((name, index) => {
          return (
            <Item
              info={{ name, index }}
              key={index}
              remove={removeItemHandle}
              changeHandle={itemNameChange}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ListItem;
