import { Modal } from "reactstrap";
import "./modal.css"

const UserModal = (props) => {

  return (
    <div>
      <Modal isOpen={props.open} toggle={props.toggle}>
        <div className="modal_box">
            <h2 className="modal_title">Add Task</h2>
            <form id="form">
            <input type="text"
            placeholder="title"
            name="title"
            className="modal_input"
             />
             <div className="select_box">
                <label>Select status</label>
                <select className="select" name="select" id="select">
                    <option  value="1">Open</option>
                    <option value="2">Pending</option>
                    <option value="3">Inprog</option>
                    <option value="4">Copmplete</option>
                </select>
             </div>
            </form>
            <div>
                <button form="form">Add</button>
                <button>Close</button>

            </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
