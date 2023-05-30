import React, { useEffect, useState } from "react";

const EditTutorial = ({ editData ,putUrl}) => {
  console.log(editData);
  const {id, title, description } = editData;
  console.log(title, description);

  const [modalTitle, setModalTitle] = useState(title);
  const [modalDesc, setModalDesc] = useState(description);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState parametresinin ilk degerini alir. Dolayisiyle bu durumda prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e aktarmak istersek useEffect hook'unu componentDidUpdate gibi kullanabiriz.

  //? title veya description her degistiginde local modalTitle ve modalDesc state'lerimizi gunceliyoruz.
  //! componentDidUpdate
  useEffect(() => {
    setModalTitle(title);
    setModalDesc(description);
  }, [title, description]);

/*   const handleSave = (e) => {
    e.preventDefault();
    putUrl(id, modalTitle, modalDesc);
    setModalTitle('');
    setModalDesc('');
  }; */

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
                    value={modalTitle || ""}
                    onChange={(e) => {
                      setModalTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    value={modalDesc || ""}
                    onChange={(e) => {
                      setModalDesc(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={()=>putUrl(id,modalTitle, modalDesc)}
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
