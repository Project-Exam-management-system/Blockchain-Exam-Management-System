import React, { useState } from "react";

const DropdownMenu = () => {
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [buildingOptions, setBuildingOptions] = useState([
    { id: 1, name: "Petroleum Building" },
    { id: 2, name: "Bamfo Kwakye Building" },
    { id: 3, name: "Ceaser Building" },
    { id: 4, name: "N Block" },
    { id: 5, name: "New Building" },
  ]);

  const classOptions = {
    "Petroleum Building": [
      { id: 1, name: "Pb 001" },
      { id: 2, name: "Pb 212" },
      { id: 3, name: "Pb 101" },
    ],
    "Bamfo Kwakye Building": [
      { id: 4, name: "Room 202" },
      { id: 5, name: "Room 301" },
      { id: 6, name: "Room 302" },
    ],
    "Ceaser Building": [
      { id: 7, name: "A100" },
      { id: 8, name: "ECR" },
      { id: 9, name: "VCR" },
    ],
    "N Block": [
      { id: 7, name: "N1" },
      { id: 8, name: "N2" },
      { id: 9, name: "VCR" },
    ],
    "New Building": [
      { id: 7, name: "A100" },
      { id: 8, name: "ECR" },
      { id: 9, name: "VCR" },
    ],
  };

  const handleBuildingChange = (event) => {
    const selectedBuilding = event.target.value;
    setSelectedBuilding(selectedBuilding);

    // Clear selection in class dropdown
    setSelectedClass("");
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div>
      <select value={selectedBuilding} onChange={handleBuildingChange}>
        <option value="">Select a building</option>
        {buildingOptions.map((building) => (
          <option key={building.id} value={building.name}>
            {building.name}
          </option>
        ))}
      </select>

      <select
        value={selectedClass}
        onChange={handleClassChange}
        disabled={!selectedBuilding}
      >
        <option value="">Select a class</option>
        {selectedBuilding &&
          classOptions[selectedBuilding].map((classOption) => (
            <option key={classOption.id} value={classOption.name}>
              {classOption.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
