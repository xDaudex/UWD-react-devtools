import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="data:image/jpeg;base64,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" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
