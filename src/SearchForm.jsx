import React from "react";
import { useGlobalContext } from "./Context";

export const SearchForm = () => {

    const {setSearchTerm} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
        <h1 className="title">Stock Images</h1>
      <form action="submit" onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="form-input search-input"
        />
        <button className="btn" type="submit">Search</button>
      </form>
    </section>
  );
};
