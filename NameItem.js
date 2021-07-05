import React from "react";

export const NameItem = ({ name, onDelete }) => {
  return (
    <>
      <div>
        <h4>{name.name}</h4>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(name);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
