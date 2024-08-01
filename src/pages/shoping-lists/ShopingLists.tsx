import { Link } from "react-router-dom";
import styles from "./shopingList.module.css";

function ShopingLists() {
  return (
    <div>
      <div className={`page-title ${styles.shopingListsTitle}`}>
        Nákupní seznamy
      </div>
      <Link className={`button ${styles.newListButton}`} to={"./new"}>
        Vytvořit
      </Link>

      <div>
        <div className={styles.listItem}>
          <Link to={"./123"} className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </Link>
          <Link to={"./new/1"} className={`button ${styles.editButton}`}>
            Upravit
          </Link>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <Link to={"./123"} className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </Link>
          <Link to={"./new/1"} className={`button ${styles.editButton}`}>
            Upravit
          </Link>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <Link to={"./123"} className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </Link>
          <Link to={"./new/1"} className={`button ${styles.editButton}`}>
            Upravit
          </Link>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <Link to={"./123"} className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </Link>
          <Link to={"./new/1"} className={`button ${styles.editButton}`}>
            Upravit
          </Link>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
      </div>
    </div>
  );
}

export default ShopingLists;
