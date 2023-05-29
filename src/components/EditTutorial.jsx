import React, { useState } from "react";

const EditTutorial = () => {
    const [modalTitle, setModalTitle] = useState("");
    const [modalDesc, setModalDesc] = useState("");
  return (
    <div>
      {/* Modal sayfasında en üstteki DiV e id eklemeliyiz ve bu id yi kullanacağımız yerde yazmalıyız.Yani AiFillEdit simgesine .  */}
      <div className="modal" tabIndex="-1" id="modal-id">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    value={modalTitle}
                    onChange={(e)=> {setModalTitle(e.target.value)}}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="desc"
                  value={modalDesc}
                  onChange={(e)=> {setModalDesc(e.target.value)}} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
