import React from "react";

const MemberList = props => {
  return (
    <div className="member-list">
      {props.members.map(m => (
        <div className="member" onClick={() => props.selectMember(m.url)}>
          {m.name}
        </div>
      ))}
    </div>
  );
};

export default MemberList;
