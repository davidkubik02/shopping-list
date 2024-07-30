import "./shoping-list.css";

function ShopingLists() {
  return (
    <div>
      {/* header */}
      <header>
        <h1 className="main-title">Můj košík</h1>
        <nav>Nákupní seznamy</nav>
      </header>
      {/* header */}

      <button className="button new-list-button">Vytvořit</button>
      <div>
        <div className="list-item">
          <div className="list-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className="button edit-button">Upravit</button>
          <button className="button delete-button">Smazat</button>
        </div>
        <div className="list-item">
          <div className="list-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className="button edit-button">Upravit</button>
          <button className="button delete-button">Smazat</button>
        </div>
        <div className="list-item">
          <div className="list-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className="button edit-button">Upravit</button>
          <button className="button delete-button">Smazat</button>
        </div>
        <div className="list-item">
          <div className="list-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit
            alias laboriosam impedit minus eveniet.
          </div>
          <button className="button edit-button">Upravit</button>
          <button className="button delete-button">Smazat</button>
        </div>
      </div>
    </div>
  );
}

export default ShopingLists;
