import React, { useState } from "react";

const inputFields = [
  {
    type: "text",
    name: "name",
    label: "Name"
  },
  {
    type: "number",
    name: "born",
    label: "Born"
  },
  {
    type: "checkbox",
    name: "isbaddie",
    label: "Is a baddie?"
  }
];

export const useForm = submitCallback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    submitCallback();
  };
  const handleInputChange = (event, key, value) => {
    console.log(event);
    if (event) event.persist();
    setInputs(inputs => ({
      ...inputs,
      [key || event.target.name]: value || event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

const MemberForm = props => {
  const { handleSubmit, handleInputChange, inputs } = useForm(() => {
    console.log("submit", inputs);
  });

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map(fieldObj => {
        return (
          <label>
            {fieldObj.label}
            <input
              type={fieldObj.type}
              name={fieldObj.name}
              onChange={handleInputChange}
              value={inputs[fieldObj.name]}
            />
          </label>
        );
      })}
      <input type="submit" />
    </form>
  );
};

export default MemberForm;
