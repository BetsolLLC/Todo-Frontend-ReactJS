import React from "react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className="card">
      <div>
        {
          <input type="checkbox"/>
        }
        <p>{props.title}</p>
      </div>
      <div className="actions">
        <button className="btn edit">
          Edit
        </button>
        <button className="btn delete">
          Delete
        </button>
      </div>
      {deleteModalOpen ? (
        <section>
          <DeleteModal />
          <Backdrop />
        </section>
      ) : null}
    </div>
  );
}

export default Todo;
