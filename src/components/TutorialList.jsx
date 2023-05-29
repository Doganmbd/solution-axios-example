import React from "react";

const TutorialList = ({ apiData }) => {
    /* console.log(apiData); */
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
         <tbody>
          {apiData.map((items) => {
            const { id, title, description } = items;
            return (
              <tr key={id}>
                <th scope="row">{id} </th>
                <td>{title} </td>
                <td>{description} </td>
                <td>@{id} </td>
              </tr>
            );
          })}
        </tbody> 
      </table>
    </div>
  );
};

export default TutorialList;
