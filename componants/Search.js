import React, { Component, useState } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import useAllRestaurant from "../utils/useAllRestaurant";


export const Search = () => {
  const [optionSelected, SetOptionSelected] = useState([]);
 const allRestaurants = useAllRestaurant();
 const allRestauran = allRestaurants.map((item) => item.data.name);
  handleChange = (selected) => {
    SetOptionSelected(selected);
  };

  return (
    <span
      className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet Restaurant(s)"
    >
      <ReactSelect
        options={allRestauran}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}     
        onChange={handleChange}
        allowSelectAll={true}
        components={allRestauran}
        value={optionSelected}>
             <option>----</option>
          {allRestauran.map((option) => (
            <option key={option} value={option.name}>
              {option}
            </option>
          ))}
        </ReactSelect>
      
    </span>
  );
};
