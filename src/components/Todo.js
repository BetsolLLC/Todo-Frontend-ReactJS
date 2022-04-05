import React from "react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  //Delete modal handlers
  function deleteModalOpenHandler() {
    setDeleteModalOpen(true);
  }
  function deleteModalCloseHandler() {
    setDeleteModalOpen(false);
  }

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
        <button className="btn delete" onClick={deleteModalOpenHandler}>
          Delete
        </button>
      </div>
      {deleteModalOpen ? (
        <section>
          <DeleteModal
            deleteId={props.id}
            closeModal={deleteModalCloseHandler}
            getItems={props.getItems}
          />
          <Backdrop closeModal={deleteModalCloseHandler} />
        </section>
      ) : null}
    </div>
  );
}

export default Todo;
