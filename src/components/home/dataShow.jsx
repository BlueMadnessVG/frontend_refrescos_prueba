import React, { useRef, useState } from "react";
import { useDataStore } from "../../global/dataStore";
import TextField from "@mui/material/TextField";
import { deleteRefrescos, patchRefrescos } from "../../services/apiCalls";

function DataShow() {
  const { data, setData } = useDataStore((state) => state);
  const changesRef = useRef(data);

  const handleClose = () => {
    setData(null);
  };

  const handleChange = (e) => {
    changesRef.current[e.target.id] = e.target.value;
  };

  const handleUpdate = async () => {
    try {
      const response = await patchRefrescos(changesRef.current, data.id);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteRefrescos(data.id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleClose}> CLOSE </button>
      <TextField
        id="name"
        defaultValue={data.name}
        onChange={handleChange}
      ></TextField>
      <TextField
        id="brand"
        defaultValue={data.brand}
        onChange={handleChange}
      ></TextField>
      <TextField
        id="flavor"
        defaultValue={data.flavor}
        onChange={handleChange}
      ></TextField>
      <TextField
        id="time_span"
        defaultValue={data.time_spam}
        onChange={handleChange}
      ></TextField>

      <div className="flex flex-row justify-between">
        <button onClick={handleUpdate}> UPDATE </button>
        <button onClick={handleDelete}> DELETE </button>
      </div>
    </div>
  );
}

export default DataShow;
