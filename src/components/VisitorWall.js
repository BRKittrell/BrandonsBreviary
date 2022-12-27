import React from "react";

const VisitorWall = () => {
   
  return (
    <div>
      <h1>Wall of Visitors</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr id="visitorTableData">
            <td id="visitorName"></td>
            <td id="visitorCompany"></td>
            <td id="message"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VisitorWall;
