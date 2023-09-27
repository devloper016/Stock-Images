import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env. VITE_API_KEY}`;
export const Gallery = () => {

    const {searchTerm} = useGlobalContext();
  const response = useQuery({
    queryKey: ["images",searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section>
        <h4>There was an error...</h4>
      </section>
    );
  }
  const result = response.data.results;
  if (result.length < 1) {
    return (
      <section>
        <h4>No result Found...</h4>
      </section>
    );
  }
  return(
    <section className="image-container">
        {result.map((item)=>{
            const url = item?.urls?.regular
            return(
                <img src={url} alt={item.alt_description} key={item.id} className="img" />
            )
        })}
    </section>
  );
};
