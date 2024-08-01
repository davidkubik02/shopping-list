import React, { useState } from "react";
import styles from "./listCreation.module.css";

function ListCreation() {
  const [name, setName] = useState<string>("");
  const id = false;

  const createListHandle = (): void => {
    if (id) {
      editListHandle();
      return;
    }
    // todo
  };
  const editListHandle = (): void => {};
  const deleteListHandle = (): void => {};

  return (
    <div>
      <div className={`page-title ${styles.listCreationTitle}`}>
        Vytvoření nového seznamu
      </div>
      <div className={styles.listCreationInputWwrapper}>
        <label htmlFor="name" className={styles.listCreationInputLabel}>
          Název
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="input"
          id="name"
        />
      </div>
      <div>
        <button
          onClick={createListHandle}
          className={`button ${styles.createButton}`}
        >
          {id ? "Upravit" : "Vytvořit"}
        </button>
        {id ? (
          <button
            className={`button delete-button ${styles.createButton}`}
            onClick={deleteListHandle}
          >
            Smazat
          </button>
        ) : undefined}
      </div>
    </div>
  );
}

export default ListCreation;
