import { useRef } from "react";
import {url} from "../App";

function EditModal(props) {
  const editContentRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const editedContent = editContentRef.current.value;
    const editData = {
      id: props.editId,
      title: editedContent,
      completed: props.completed
    };
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    }).then((response) => {
      if(!response.ok) {
        alert('Update failed');
        props.closeModal();
      } else {
        props.getItems();
      }
    });
  }

  function cancelHandler() {
    props.closeModal();
  }

  return (
    <div className="modal">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder={props.currentValue}
          maxLength="100"
          required
          ref={editContentRef}
        />
        <button className="btn btn--alt" type="submit">
          Update
        </button>
        <button className="btn" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditModal;
