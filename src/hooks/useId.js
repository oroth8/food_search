import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getResultById = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  return [getResultById, result, errorMsg];
};
