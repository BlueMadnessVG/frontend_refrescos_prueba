import React, { useState, useEffect } from "react";
import AsideCard from "./asideCard";
import { getRefrescos } from "../../services/apiCalls";

function Aside() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRefrescos();
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-2">
      <button> CREATE </button>
      {datas.length > 0 &&
        datas.map((data, index) => {
          return <AsideCard key={index} data={data} />;
        })}
    </div>
  );
}

export default Aside;
