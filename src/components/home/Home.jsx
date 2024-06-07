import React, { useEffect } from "react";
import { getRefrescos } from "../../services/apiCalls";
import { useDataStore } from "../../global/dataStore";
import DataShow from "./dataShow";

function Home() {
  const { data } = useDataStore((state) => state);

  return (
    <div>
      {data != null ? <DataShow /> : <h1> NO HAY DATOS SELECCIONADOS </h1>}
    </div>
  );
}

export default Home;
