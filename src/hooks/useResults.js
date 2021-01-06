import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "chicago",
        },
      });
      setResults(res.data.businesses);
      setErrorMsg(null);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something Went Wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMsg];
};
