import React from "react";

const AddTutorial = () => {
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="desc" />
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
