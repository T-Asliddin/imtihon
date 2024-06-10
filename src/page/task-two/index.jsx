import { useState } from "react";
import UserModal from "../../componenets/modal/Modal";
import "./index.css";

const Index = () => {
  const [title, setTitle] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [title3, setTitle3] = useState([]);
  const [title4, setTitle4] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [edit, setEidt] = useState({});
  const [edit2, setEidt2] = useState({});
  const [edit3, setEidt3] = useState({});
  const [edit4, setEidt4] = useState({});
  const [select ,setselect]=useState("")
  const openModal = (item) => {
    setEidt(item);
    setModal(true);
  }; const openModal2 = (item) => {
    setEidt2(item);
    setModal2(true);
  };
  const openModal3 = (item) => {
    setEidt3(item);
    setModal3(true);
  };
  const openModal4= (item) => {
    setEidt4(item);
    setModal4(true);
  };

  const toggle = () => {
    setModal(false);
    setEidt({});
  };
  const toggle2 = () => {
    setModal2(false);
    setEidt2({});
  };
  const toggle3 = () => {
    setModal3(false);
    setEidt3({});
  };
  const toggle4 = () => {
    setModal4(false);
    setEidt4({});
  };

  const deleteTitle = (id) => {
    const new_title = title.filter((item) => item.id !== id);
    setTitle([...new_title]);
  };
  const deleteTitle2 = (id) => {
    const new_title = title.filter((item) => item.id !== id);
    setTitle2([...new_title]);
  };
  const deleteTitle3 = (id) => {
    const new_title = title.filter((item) => item.id !== id);
    setTitle3([...new_title]);
  };
  const deleteTitle4 = (id) => {
    const new_title = title.filter((item) => item.id !== id);
    setTitle4([...new_title]);
  };

  console.log(select);
  return (
    <div className="tasktwo container">
      <UserModal
        open={modal}
        toggle={toggle}
        title={title}
        setTitle={setTitle}
        edit={edit}
        setselect={setselect}
      />
      <div >
        <div className="row mt-3 open_box">
          <table className="table table-bordered table-hover table-striped">
            <thead className="titl">
              <h2>Open</h2>
            </thead>
            <tbody>
              {title.map((item, index) => (
                <tr key={index}>
                  <td className="item">
                    {item.title}
                    <div className="d-flex gap-2 align-items-center">
                      <button
                        onClick={() => openModal(item)}
                        className="btn btn-info"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTitle(item.id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-10 offset-1">
              <div className="roww">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setModal(true)}
                  >
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserModal
        open={modal2}
        toggle={toggle2}
        title={title2}
        setTitle={setTitle2}
        edit={edit2}
      />
      <div>
        <div className="row mt-3 open_box">
          <table className="table table-bordered table-hover table-striped">
            <thead className="titl">
              <h2>Pending</h2>
            </thead>
            <tbody>
              {title2.map((item, index) => (
                <tr key={index}>
                  <td className="item">
                    {item.title}
                    <div className="d-flex gap-2 align-items-center">
                      <button
                        onClick={() => openModal2(item)}
                        className="btn btn-info"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTitle2(item.id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-10 offset-1">
              <div className="roww">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setModal2(true)}
                  >
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserModal
        open={modal3}
        toggle={toggle3}
        title={title3}
        setTitle={setTitle3}
        edit={edit3}
      />
      <div>
        <div className="row mt-3 open_box">
          <table className="table table-bordered table-hover table-striped">
            <thead className="titl">
              <h2>Inprog</h2>
            </thead>
            <tbody>
              {title3.map((item, index) => (
                <tr key={index}>
                  <td className="item">
                    {item.title}
                    <div className="d-flex gap-2 align-items-center">
                      <button
                        onClick={() => openModal3(item)}
                        className="btn btn-info"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTitle4(item.id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-10 offset-1">
              <div className="roww">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setModal3(true)}
                  >
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserModal
        open={modal4}
        toggle={toggle4}
        title={title4}
        setTitle={setTitle4}
        edit={edit4}
      />
      <div >
        <div className="row mt-3 open_box">
          <table className="table table-bordered table-hover table-striped">
            <thead className="titl">
              <h2>Complete</h2>
            </thead>
            <tbody>
              {title4.map((item, index) => (
                <tr key={index}>
                  <td className="item">
                    {item.title}
                    <div className="d-flex gap-2 align-items-center">
                      <button
                        onClick={() => openModal(item)}
                        className="btn btn-info"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTitle4(item.id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-10 offset-1">
              <div className="roww">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setModal4(true)}
                  >
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
