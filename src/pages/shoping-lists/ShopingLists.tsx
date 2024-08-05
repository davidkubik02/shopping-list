import { Link } from "react-router-dom";
import styles from "./shopingList.module.css";
import { useEffect, useState } from "react";
import { deleteList, getAllLists } from "../../localStorage/localStorage";

function ShopingLists() {
  const [listsArray, setListsArray] = useState<string[]>([]);
  useEffect(() => {
    setListsArray(getAllLists());
  }, []);
  const deleteListHandle = (listName: string) => {
    if (!window.confirm(`Vážně chcete SMAZAT seznam "${listName}"`)) {
      return;
    }
    deleteList(listName);
    setListsArray(getAllLists());
  };
  return (
    <div>
      <div className={`page-title ${styles.shopingListsTitle}`}>
        Nákupní seznamy
      </div>
      <Link className={`button ${styles.newListButton}`} to={"./new"}>
        Vytvořit
      </Link>

      <div className={styles.listsWrapper}>
        {listsArray.map((listName) => {
          return (
            <div className={styles.listItem} key={listName}>
              <Link to={`./${listName}`} className={styles.listTitle}>
                {listName}
              </Link>
              <div className={styles.buttonsWrapper}>
                <Link
                  to={`./edit/${listName}`}
                  className={`button ${styles.editButton}`}
                >
                  Upravit
                </Link>
                <button
                  onClick={() => deleteListHandle(listName)}
                  className={`button delete-button ${styles.deleteButton}`}
                >
                  Smazat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopingLists;
