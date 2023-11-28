import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card";
import "./index.scss";
import { v4 as uuidv4 } from 'uuid'; 

const Cards = () => {


  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const url = "  http://localhost:3000/products";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
      setIsLoading(false);
    }
  };

  useFetch(url, Callback);

  return (
    <>
      

      <div className="row" style={{ paddingTop: "80px" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <>
              <Card key={uuidv4()} {...item} item={item} />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
