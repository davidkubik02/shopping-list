import React, { useState } from "react";
import "./list-item.css";
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
      {/* header */}
      <header>
        <h1 className="main-title">Můj košík</h1>
        <nav>{"Nákupní seznamy >Položky seznamu"}</nav>
      </header>
      {/* header */}
      <div className="page-title list-item-title">Položky seznamu</div>
      <div className="list-item-add-wrapper">
        <input
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          type="text"
          className="litst-item-input"
          ref={inputRef}
        />
        <button className="button add-button" onClick={addHandle}>
          Přidat
        </button>
      </div>
      <ul className="items-list">
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
