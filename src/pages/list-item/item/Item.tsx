import React from "react";

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
    <li className="item">
      <button
        className="button cancel-button"
        onClick={() => remove(info.index)}
      >
        x
      </button>
      <input
        className="item-name"
        onChange={(event) => {
          changeHandle(info.index, event);
        }}
        value={info.name}
      />
    </li>
  );
}

export default Item;
