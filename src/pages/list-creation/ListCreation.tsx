import React, { useEffect, useState } from "react";
import styles from "./listCreation.module.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteList,
  listExists,
  saveList,
  updateListName,
} from "../../localStorage/localStorage";

function ListCreation() {
  const [name, setName] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    if (listExists(id)) {
      setName(id);
    } else {
      navigate("/shoping-lists/new");
    }
  }, [id]);

  const createListHandle = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (id) {
      editListHandle(id);
      return;
    }
    if (name.length === 0) {
      window.alert("Název nemůže být prázdný");
      return;
    }
    if (listExists(name)) {
      window.alert("Tento list již existuje!");
      return;
    }
    const list = {
      name,
      items: [],
    };
    saveList(list);
    setName("");
    navigate("/shoping-lists");
  };
  const editListHandle = (listName: string): void => {
    if (name === id) {
      navigate("/shoping-lists");
      return;
    }
    if (listExists(name)) {
      window.alert("Tento list již existuje!");
      return;
    }
    updateListName(listName, name);
    navigate("/shoping-lists");
  };
  const deleteListHandle = (): void => {
    if (id) {
      if (!window.confirm(`Vážně chcete SMAZAT seznam "${id}"`)) {
        return;
      }
      deleteList(id);
      navigate("/shoping-lists");
    }
  };

  return (
    <div>
      <div className={`page-title ${styles.listCreationTitle}`}>
        {id ? `Úprava seznamu "${id}"` : "Vytvoření nového seznamu"}
      </div>
      <form>
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
        <div className={styles.buttonWrapper}>
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
      </form>
    </div>
  );
}

export default ListCreation;
