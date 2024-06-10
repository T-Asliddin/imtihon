import UserModal from "../../componenets/Modal";
import { useState } from "react";

const TaskTwo = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
      };

  return (
    <div>
        <UserModal
        open={modal}
        toggle={() => setModal(false)}
      />
        <div className="input_box">
            <h1>Open</h1>
            <button onClick={openModal}> Add Card</button>

        </div>
    </div>
  )
}

export default TaskTwo