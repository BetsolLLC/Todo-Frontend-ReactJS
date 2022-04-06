import React from "react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  function completeItem() {
    const url = "";
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
          <input type="checkbox" onClick={completeItem}/>
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
