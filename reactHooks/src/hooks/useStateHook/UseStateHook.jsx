import React from "react";
import { useState } from "react";

const UseStateHook = () => {
  const initialState = {
    name: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleNameChange = (event) => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };
  const handleCityChange = (event) => {
    setFormData({
      ...formData,
      city: event.target.value,
    });
  };

  // console.log(formData)

  return (
    <div>
      <input onChange={handleNameChange} type="text" placeholder="enter name" />
      <select onChange={handleCityChange} name="city" id="">
        <option value={""} id="">
          Select City
        </option>
        <option value={"Chandigarh"}>Chandigarh</option>
        <option value={"Mohali"}>Mohali</option>
        <option value={"Ropar"}>Ropar</option>
      </select>
      <div>
        <p>Name is {formData.name} </p>
        <p> City is {formData.city}</p>
      </div>
    </div>
  );
};

export default UseStateHook;
