import React from "react";

const SelectedMember = ({ name, aliases, born, died }) => {
  return (
    <div>
      <div>{name}</div>
      <ul>
        {aliases.map(a => (
          <li>{a}</li>
        ))}
      </ul>
      <p>Born: {born}</p>
      <p>Died: {died}</p>
    </div>
  );
};

export default SelectedMember;
