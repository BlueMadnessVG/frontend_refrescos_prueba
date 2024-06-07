import React from "react";
import { useDataStore } from "../../global/dataStore";

function AsideCard({ data }) {
  const { setData } = useDataStore((state) => state);

  const handleClick = () => {
    setData(data);
  };

  return (
    <button
      className="bg-zinc-700/60 flex px-2 py-1 rounded-md hover:bg-zinc-700"
      onClick={handleClick}
    >
      {data.name}
    </button>
  );
}

export default AsideCard;
