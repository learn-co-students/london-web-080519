import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./adapters/API";
import MemberList from "./components/MemberList";
import SelectedMember from "./components/SelectedMember";
import MemberForm from "./components/MemberForm";

function App() {
  const [houseData, setHouseData] = useState(undefined);
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(undefined);

  useEffect(() => {
    API.getHouseData().then(houseData => {
      setHouseData(houseData);
      API.getDataAtAllUrls(houseData.swornMembers).then(members =>
        setMembers(members)
      );
    });
  }, []);

  if (!houseData) return <div>loadoung house daat</div>;

  const selectedMemberObject = members.find(m => m.url === selectedMember);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{houseData.name}</h2>

        <MemberForm />

        <MemberList members={members} selectMember={setSelectedMember} />

        {selectedMemberObject && <SelectedMember {...selectedMemberObject} />}
      </header>
    </div>
  );
}

export default App;
