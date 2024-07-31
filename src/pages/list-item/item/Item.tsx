import React from "react";
import styles from "../listItem.module.css";
function Item({
  info,
  remove,
  changeHandle,
}: {
  info: { name: string; index: number };
  remove: (index: number) => void;
  changeHandle: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <li className={styles.item}>
      <button
        className={`button ${styles.cancelButton}`}
        onClick={() => remove(info.index)}
      >
        x
      </button>
      <input
        className={styles.itemName}
        onChange={(event) => {
          changeHandle(info.index, event);
        }}
        value={info.name}
      />
    </li>
  );
}

export default Item;
