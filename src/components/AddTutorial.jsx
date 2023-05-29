import React, { useState } from "react";

const AddTutorial = () => {
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
/*   console.log(addTitle);
  console.log(addDescription); */
  return (
    <div>
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
        <div className="mb-5 text-center">
          <button type="submit" className="btn btn-primary  text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
