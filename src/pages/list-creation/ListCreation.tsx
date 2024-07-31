import React from "react";

function ListCreation() {
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
        <label>Přidat</label>
        <input type="text" className="litst-item-input" />
      </div>
    </div>
  );
}

export default ListCreation;
