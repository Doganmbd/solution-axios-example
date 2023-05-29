import React, { useState } from "react";

const AddTutorial = () => {
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  /*   console.log(addTitle);
  console.log(addDescription); */

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fs-5 fw-bold">
        <h1 className="text-center text-danger mb-5">ADD TUTORIAL LIST PROJECT</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => setAddTitle(e.target.value)}
            value={addTitle}
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
            onChange={(e) => setAddDescription(e.target.value)}
            value={addDescription}
          />
        </div>
        <div className="m-5 text-center">
          <button type="submit" className="btn btn-primary  text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
