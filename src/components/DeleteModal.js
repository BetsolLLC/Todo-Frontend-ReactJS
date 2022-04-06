import {url} from "../App";

function DeleteModal(props) {
  function confirmHandler() {
    const deleteData = {
      id: props.deleteId
    };
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteData)
    }).then((response) => {
      if(!response.ok) {
        alert('Delete failed');
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
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={confirmHandler}>
        Confirm
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default DeleteModal;
