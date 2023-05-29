import React from "react";
import { ImBin } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ apiData, delData }) => {
  /* console.log(apiData); */
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="fs-5 text-center">
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody className="fs-5 text-center">
          {apiData.map((items) => {
            const { id, title, description } = items;
            return (
              <tr key={id}>
                <th scope="row">{id} </th>
                <td>{title} </td>
                <td>{description} </td>
                <td>
                  <AiFillEdit
                    data-bs-toggle="modal"
                    data-bs-target="#modal-id"
                    className="text-warning me-3"
                    size={25}
                  />
                  <ImBin
                    onClick={() => delData(id)}
                    className="text-danger"
                    size={25}
                  />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial />
    </div>
  );
};

export default TutorialList;
