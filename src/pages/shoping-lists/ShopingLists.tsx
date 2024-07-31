import styles from "./shopingList.module.css";

function ShopingLists() {
  return (
    <div>
      {/* header */}
      <header>
        <h1 className="main-title">Můj košík</h1>
      </header>
      {/* header */}

      <div className={`page-title ${styles.shopingListsTitle}`}>
        Nákupní seznamy
      </div>
      <button className={`button ${styles.newListButton}`}>Vytvořit</button>
      <div>
        <div className={styles.listItem}>
          <div className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className={`button ${styles.editButton}`}>Upravit</button>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className={`button ${styles.editButton}`}>Upravit</button>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className={`button ${styles.editButton}`}>Upravit</button>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className={`button ${styles.editButton}`}>Upravit</button>
          <button className={`button ${styles.deleteButton}`}>Smazat</button>
        </div>
      </div>
    </div>
  );
}

export default ShopingLists;
