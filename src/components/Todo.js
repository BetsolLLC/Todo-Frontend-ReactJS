import React from "react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  //Delete modal handlers
  function deleteModalOpenHandler() {
    setDeleteModalOpen(true);
  }
  function deleteModalCloseHandler() {
    setDeleteModalOpen(false);
  }

  //Edit Modal Handlers
  function editModalOpenHandler() {
    setEditModalOpen(true);
  }
  function editModalCloseHandler() {
    setEditModalOpen(false);
  }

  function completeItem() {
    const url = "http://localhost:5000/api/v1/";
    const completeItem = { id: props.id };
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(completeItem),
    }).then((response) => {
      if (!response.ok) {
        alert("Completing task failed");
      }
      props.getItems();
    });
  }

  return (
    <div className="card">
      <div>
        {
          <input type="checkbox" onClick={completeItem} checked={props.completed ? "checked" : ""} readOnly/>
        }
        <p>{props.title}</p>
      </div>
      <div className="actions">
        <button className="btn edit" onClick={editModalOpenHandler}>
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
      {editModalOpen ? (
        <section>
          <EditModal
            editId={props.id}
            currentValue={props.title}
            completed={props.completed}
            closeModal={editModalCloseHandler}
            getItems={props.getItems}
          />
          <Backdrop closeModal={editModalCloseHandler} />
        </section>
      ) : null}
    </div>
  );
}

export default Todo;
