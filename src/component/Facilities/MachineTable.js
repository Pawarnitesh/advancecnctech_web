import React from "react";
import "./MachineTable.css";
const MachineTable = () => {
  return (
    <div>
      {/* machine details table  */}
      <table>
        <tr>
          <th>Machine Name</th>
          <th>Facility</th>
          <th>Machine Make</th>
        </tr>
        <tr>
          <td>CNC Turning Machine</td>
          <td>RapidTurn - Marshal</td>
          <td>Indian Make</td>
        </tr>
        <tr>
          <td>CNC Turning Machine</td>
          <td>SwedTurn - SMT </td>
          <td>Sweden Make</td>
        </tr>
        <tr>
          <td>VMC Machine</td>
          <td>BFW</td>
          <td>Germany</td>
        </tr>

        <tr>
          <td>VMC Machine </td>
          <td>Pinnacle</td>
          <td>Taiwan Make</td>
        </tr>
        <tr>
          <td>VMC Machine</td>
          <td>Kingrich</td>
          <td>Taiwan Make</td>
        </tr>
        <tr>
          <td>VMC Machine</td>
          <td>Harmle</td>
          <td>Germany Make</td>
        </tr>
        <tr>
          <td>VMC Machine</td>
          <td>Slim 3 Makino</td>
          <td>Japan Make</td>
        </tr>
        <tr>
          <td>HMC Machine</td>
          <td>Hitachi Seiki</td>
          <td>Japan Make</td>
        </tr>
      </table>
    </div>
  );
};

export default MachineTable;
