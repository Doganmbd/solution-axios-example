import React from "react";
import { ImBin } from 'react-icons/im'; 
import { AiFillEdit } from 'react-icons/ai';

const TutorialList = ({ apiData }) => {
    /* console.log(apiData); */
  return (
    <div>
      <table className="table" >
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
                <td > <AiFillEdit className="text-warning me-3" size={25}/> <ImBin className="text-danger" size={25}/>  </td>
              </tr>
            );
          })}
        </tbody> 
      </table>
    </div>
  );
};

export default TutorialList;
